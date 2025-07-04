import { NextResponse } from "next/server";
import { ConnectToMongoClientDb } from "../../../lib/db/connection/mognodb";
import NavCategory from "../../../lib/db/mongodb/models/nav_links/NavModel";
import PillBar from "../../../lib/db/mongodb/models/nav_links/PillBarModel";

export async function POST(req) {
    const requestBody = await req.json();
    const {  requestType } = requestBody;

    try {
        await ConnectToMongoClientDb();

        let data;
        if (requestType === "getNavData") {
            data = await NavCategory.find({});
        } else if (requestType === "getPillBarData") {
            data = await PillBar.find({});
        } else {
            return NextResponse.json({ error: "Invalid request type" });
        }
        if (!data || data.length === 0) {
            return NextResponse.json({ error: "No data found" });
        }
        console.log("Fetched Navigation Data:", data);
        
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error " + error.message });
    }
}