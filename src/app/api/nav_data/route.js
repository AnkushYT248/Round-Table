import { NextResponse } from "next/server";
import { ConnectToMongoClientDb } from "../../../lib/db/connection/mognodb";
import CourseModel from "../../../lib/db/mongodb/models/course/CourseModel";
import Tutorials from "../../../lib/db/mongodb/models/tutorials/Tutorials"; // Uncomment and fix path if you have a Tutorials model

export async function POST(req) {
    const requestBody = await req.json();
    const {  requestType } = requestBody;

    try {
        await ConnectToMongoClientDb();

        let courseData = [];
        let tutorialData = [];
        if (requestType === "getNavData") {
            courseData = await CourseModel.find({});
            tutorialData = await Tutorials.find({}); // Uncomment if you have a Tutorials model
        } else {
            return NextResponse.json({ error: "Invalid request type" });
        }
        // Only check for data existence for the relevant type
        if ((requestType === "getNavData" && (!courseData || courseData.length === 0))){
            return NextResponse.json({ error: "No data found" });
    }

        return NextResponse.json({
            courseData,
            tutorialData,
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error " + error.message });
    }
}