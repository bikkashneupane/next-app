import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// GET
export const GET = (request: NextRequest) => {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      price: 2.5,
    },
    {
      id: 2,
      name: "Bread",
      price: 3.5,
    },
  ]);
};

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ message: "New Product Added" }, { status: 201 });
}
