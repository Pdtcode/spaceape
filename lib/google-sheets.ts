import { google } from "googleapis";

// You'll need to set these environment variables
const GOOGLE_SHEETS_PRIVATE_KEY =
  process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

export async function appendToSheet(values: string[]) {
  try {
    // Create JWT auth
    const auth = new google.auth.JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create Google Sheets API instance
    const sheets = google.sheets({ version: "v4", auth });

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A:G", // Updated range for 7 columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending to Google Sheets:", error);
    throw error;
  }
}

export async function createHeaderRow() {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_SHEETS_CLIENT_EMAIL,
      key: GOOGLE_SHEETS_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Add header row if it doesn't exist
    const headers = [
      "Timestamp",
      "First Name",
      "Last Name",
      "Email",
      "Instagram",
      "Zip Code",
      "State",
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [headers],
      },
    });
  } catch (error) {
    console.error("Error creating header row:", error);
    throw error;
  }
}
