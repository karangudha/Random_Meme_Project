const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = 3002;

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for coding memes
app.get('/api/coding-meme', async (req, res) => {
    try {
        // List of programming-related subreddits
        const subreddits = ['ProgrammerHumor', 'codingmemes', 'programmingmemes'];
        const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

        console.log(`Fetching coding meme from r/${randomSubreddit}`);
        const response = await fetch(`https://api.imgflip.com/get_memes${randomSubreddit}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Coding meme data received:', data);

        if (!data || !data.url) {
            throw new Error('No meme found in response');
        }

        res.json({
            success: true,
            meme: {
                url: data.url,
                title: data.title || 'Coding Meme',
                author: data.author || 'Unknown',
                source: `r/${randomSubreddit}`
            }
        });
    } catch (error) {
        console.error('Error fetching coding meme:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch coding meme',
            details: error.message
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 