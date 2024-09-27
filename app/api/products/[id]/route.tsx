import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: number;
  };
}

// GET
export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: "Milk", price: 2.5 },
    { status: 200 }
  );
}

// UPDATE
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return NextResponse.json({ message: "Prodct Updated" }, { status: 200 });
}

// DELETE
export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return NextResponse.json({ message: "Prodct Deleted" }, { status: 200 });
}
