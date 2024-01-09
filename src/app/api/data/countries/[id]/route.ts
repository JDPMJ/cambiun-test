import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

interface Params {
  params: { id: string, name: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const country = await db.country.findMany({ where: { name: { contains: params.id } } });
    if (!country) return NextResponse.json({ message: "Country not found" }, { status: 404 });
    return NextResponse.json(country);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const country = await db.country.delete({ where: { id: Number(params.id) } });
    if (!country) return NextResponse.json({ message: "Country not found" }, { status: 404 });
    return NextResponse.json(country);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ message: "Country not found" }, { status: 404 });
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const {name, timeZone} = await request.json();
    const country = await db.country.update({
      where: { id: Number(params.id) },
      data: { name: name, time_zone: timeZone }
    });
    return NextResponse.json(country);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ message: "Country not found" }, { status: 404 });
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}