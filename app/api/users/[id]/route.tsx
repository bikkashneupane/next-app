import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

// GET
export const GET = (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Bikash" });
};

// UPDATE
export const PUT = async (request: NextRequest, { params }: Props) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
};

// DELETE
export const DELETE = async (request: NextRequest, { params }: Props) => {
  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json({ message: "User Deleted" }, { status: 200 });
};
