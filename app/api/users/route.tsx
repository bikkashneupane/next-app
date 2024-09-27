import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

// GET
export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Bikash" },
    { id: 2, name: "Neupane" },
  ]);
};

// POST
export const POST = async (request: NextRequest) => {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
};

// UPDATE
export const PUT = async (request: NextRequest, { params }: Props) => {
  const body = await request.json();

  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
};

// DELETE
