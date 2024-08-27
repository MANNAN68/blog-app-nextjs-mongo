import { dbConnect } from "@/lib/mongo";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
import { createUser } from "@/queries/user";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  // console.log(name, email, password);

  //   create DB connection
  await dbConnect();
  // Encript password
  const hasedPassword = await bcrypt.hash(password, 5);
  // Form a payload
  const newUser = {
    name,
    password: hasedPassword,
    email,
  };
  // Update db
  try {
    await createUser(newUser);
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }

  return new NextResponse("User create successfully", {
    status: 201,
  });
};
