import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from '@/lib/db';
import { data } from "@/lib/model/data";

async function connectDB() {
    if (!mongoose.connection.readyState) {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

export async function GET() {
    let users = [];
    let success = true;

    try {
        await connectDB();
        users = await data.find();
    } catch (error) {
        console.error("Error fetching data:", error);
        success = false;
    }

    return NextResponse.json({ result: users, success });
}

export async function POST(req) {
    try {
        await connectDB();

        const { id, first_name, last_name, email, password, country } = await req.json();

        // Validate required fields
        if (!first_name || !last_name || !email || !password || !country) {
            return NextResponse.json({ error: 'All fields are required.', success: false });
        }

        // Check if the email already exists
        const existingUser = await data.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists. Please use a different email.', success: false });
        }

        // Create a new user
        let newUser = new data({
            id,
            first_name,
            last_name,
            email,
            password,
            country,
        });

        const result = await newUser.save();
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: error.message, success: false });
    }
}
