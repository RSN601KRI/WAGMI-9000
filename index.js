const express = require('express');
const app = express();

app.use(express.json());

app.post('/wagmi', (req, res) => {
    const body = req.body;

    // Ping test (empty body)
    if (!body || Object.keys(body).length === 0) {
        return res.json({
            message: "wagmi",
            timestamp: new Date().toISOString(),
            lang: "Node.js"
        });
    }

    const { a, b } = body;

    // Validate a and b
    if (typeof a === 'number' && typeof b === 'number' && a >= 0 && b >= 0 && a + b <= 100) {
        return res.json({
            result: a + b,
            a,
            b,
            status: "success"
        });
    } else {
        return res.status(400).json({
            error: "Invalid input"
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
