import { NextResponse } from "next/server";
import { ConnectToMongoClientDb } from "../../../lib/db/connection/mognodb";
import CourseModel from "../../../lib/db/mongodb/models/course/CourseModel";

export async function GET() {
  try {
    await ConnectToMongoClientDb();
    const courses = await CourseModel.find({});
    return NextResponse.json(
      { courses },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch courses " + error },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
