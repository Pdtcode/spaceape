import { NextRequest, NextResponse } from "next/server";

import { appendToSheet } from "@/lib/google-sheets";

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  instagram: string;
  zipCode: string;
  state: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: SignupData = await request.json();

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.zipCode ||
      !data.state
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Validate phone number format
    const phoneRegex =
      /^[\+]?[1]?[-\s\.]?[\(]?[0-9]{3}[\)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    const cleanPhone = data.phone.replace(/[\s\-\.\(\)]/g, "");

    if (
      !phoneRegex.test(data.phone) ||
      cleanPhone.length < 10 ||
      cleanPhone.length > 11
    ) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 },
      );
    }

    // Validate ZIP code format
    const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!zipRegex.test(data.zipCode)) {
      return NextResponse.json(
        { error: "Invalid ZIP code format" },
        { status: 400 },
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toLocaleString();
    const rowData = [
      timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.instagram || "",
      data.zipCode,
      data.state,
    ];

    try {
      // Submit to Google Sheets
      await appendToSheet(rowData);
      console.log("Successfully added to Google Sheets:", rowData);
    } catch (sheetsError) {
      console.error("Google Sheets error:", sheetsError);
      // Still return success to user, but log the error
      console.log("Fallback: Data logged locally:", rowData);
    }

    return NextResponse.json({ message: "Signup successful" }, { status: 200 });
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
