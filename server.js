import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001; // Changed to avoid conflict

app.use(cors());
app.use(express.static('.'));
app.use(express.json());

app.get('/api/profile', async (req, res) => {
    const { playerId, platform } = req.query;
    if (!playerId) {
        return res.status(400).json({ error: 'Player ID required' });
    }
    try {
        const response = await fetch(`https://api.warframe.com/cdn/getProfileViewingData.php?playerId=${playerId}&platform=${platform || 'pc'}`);
        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }
        const text = await response.text();
        const data = JSON.parse(text);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});