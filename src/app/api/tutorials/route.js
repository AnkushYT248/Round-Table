import { NextResponse } from "next/server";
import { ConnectToMongoClientDb } from "../../../lib/db/connection/mognodb";
import Tutorials from "../../../lib/db/mongodb/models/tutorials/Tutorials";

export async function GET() {
  try {
    await ConnectToMongoClientDb();
    const tutorials = await Tutorials.find({});
    if(tutorials.length === 0) {
      return NextResponse.json(
        { message: "No tutorials found" },
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    return NextResponse.json(
      { tutorials },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    return NextResponse.json(
      { message: "Failed to fetch tutorials" },
      { status: 500 }
    );
  }
}
