# BFHL API Project

This project is a simple Express.js API that parses an input array of strings and returns categorized data as per the requirements of a typical full stack coding challenge.

## Features
- Accepts a POST request at `/api/bfhl` with a JSON body containing a `data` field (either a stringified array or an array of strings).
- Categorizes input into:
  - Odd numbers
  - Even numbers
  - Alphabets (returned in uppercase)
  - Special characters
- Returns:
  - The sum of all numbers (as a string)
  - `concat_string`: All alphabets concatenated in reverse order with alternating caps (starting with uppercase)
  - User details (user_id, email, roll_number)
  - `is_success` flag for operation status
- Handles errors and invalid input gracefully

## Sample Request
```
POST /api/bfhl
Content-Type: application/json

{
  "data": "[\"a\",\"1\",\"334\",\"4\",\"R\",\"$\"]"
}
```
Or
```
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Sample Response
```
{
  "is_success": true,
  "user_id": "amey_tripathi_17072003",
  "email": "ameytrips0307@gmail.com",
  "roll_number": "22BCE3111",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node index.ts
   ```
3. The server will run on `http://localhost:3000`.

## Notes
- Make sure to send the `Content-Type: application/json` header in your requests.
- The API expects the `data` field to be either a stringified array or an array of strings.

---

**Author:** Amey Tripathi
