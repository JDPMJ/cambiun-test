import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const countries = await db.country.findMany();
    return NextResponse.json(countries);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const {name, timeZone} = await request.json();
    const newCountry = await db.country.create({
      data: {
        name: name,
        time_zone: timeZone
      }
    });
    return NextResponse.json(newCountry);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}