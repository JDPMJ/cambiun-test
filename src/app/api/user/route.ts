import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Definir un esquema para la validación de los inputs
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
  });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    // Verificar si el email ya está en uso
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email }
    });

    if (existingUserByEmail) {
      return NextResponse.json({ user: null, message: "El usuario con este email ya existe." }, { status: 409 });
    }

    // Verificar si el username ya está en uso
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username }
    });

    if (existingUserByEmail) {
      return NextResponse.json({ user: null, message: "El usuario con este username ya existe." }, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: newUser, message: "Usuario agregado exitosamente" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Ocurrió algún error" }, { status: 500 });
  }
}