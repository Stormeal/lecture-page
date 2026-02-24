import express, { Request, Response } from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import credentials from './google-credentials.json';

const app = express();

app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = '1wFAmyBsGIwQPPfy9Mc9LxZ9UWj2zU3NCsriADjz8QRI';
const SHEET_NAME = 'Sheet1';

app.post('/api/quiz-submissions', async (req: Request, res: Response) => {
  const { course, quizId, questionId, selectedOption, isCorrect, attempts, userId } = req.body;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:H`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            course,
            quizId,
            questionId,
            selectedOption,
            isCorrect,
            attempts,
            userId ?? 'anonymous',
          ],
        ],
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Quiz API running on http://localhost:3000');
});
