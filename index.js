// POST /api/parse-data: parses a string array and returns categorized response
import express from 'express';

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.post('/api/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        let arr = [];
        if (typeof data === 'string') {
            try {
                arr = JSON.parse(data);
                if (!Array.isArray(arr)) throw new Error();
            } catch {
                return res.status(400).json({
                    is_success: false,
                    error: 'data string must be a valid JSON array',
                });
            }
        } else if (Array.isArray(data)) {
            arr = data;
        } else {
            return res.status(400).json({
                is_success: false,
                error: 'data must be a stringified array or an array of strings',
            });
        }

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        // let concat_string = '';

        const alphaChars = [];
        arr.forEach((item) => {
            if (/^-?\d+$/.test(item)) {
                // It's a number
                const num = parseInt(item, 10);
                if (num % 2 === 0) {
                    even_numbers.push(item);
                } else {
                    odd_numbers.push(item);
                }
                sum += num;
            } else if (/^[a-zA-Z]$/.test(item)) {
                // It's an alphabet
                alphabets.push(item.toUpperCase());
                alphaChars.push(item);
            } else {
                // Special character
                special_characters.push(item);
            }
        });

        // Build concat_string: reverse order, alternating caps (start with uppercase)
        let concat_string = '';
        alphaChars.reverse().forEach((ch, idx) => {
            concat_string += idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
        });

        res.status(200).json({
            is_success: true,
            "user_id": "amey_tripathi_17072003",
            "email": "ameytrips0307@gmail.com",
            "roll_number": "22BCE3111",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: sum.toString(),
            concat_string,
        });
    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: 'Internal server error',
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
