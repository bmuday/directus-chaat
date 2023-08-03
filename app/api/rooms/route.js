import { NextResponse } from "next/server";
import { publicRooms } from "@/dummydata";

export async function GET() {
  const endpoint = "http://localhost:8055/";
  try {
    // const res = await fetch(endpoint, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   cache: "no-store",
    // });
    // const data = await res.json();

    // console.log("data", NextResponse.json(data));
    // return NextResponse.json(data);
    console.log("public", publicRooms);
    return publicRooms;
  } catch (error) {
    console.log("error", error);
  }
}
