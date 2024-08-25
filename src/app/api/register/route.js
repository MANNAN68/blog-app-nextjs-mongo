import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  //   create DB connection

  // Encript password

  // Form a payload

  // Update db

  return new NextResponse("User create successfully", {
    status: 201,
  });
};
