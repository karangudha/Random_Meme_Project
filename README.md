# Coding Meme Generator

A fun web application that generates random coding-related memes from popular programming subreddits. Built with Node.js and Express.

## Features

- 🎯 Fetches random coding memes from multiple programming subreddits
- 🎨 Clean and responsive user interface
- ⚡ Real-time meme generation
- 🔄 Multiple meme sources (ProgrammerHumor, codingmemes, programmingmemes)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd coding-meme-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3002
```

## Project Structure

```
coding-meme-generator/
├── server.js          # Express server and API endpoints
├── index.html         # Main HTML file
├── styles.css         # CSS styles
├── script.js          # Frontend JavaScript
├── package.json       # Project dependencies
└── .gitignore        # Git ignore file
```

## API Endpoints

### Get Random Coding Meme
```
GET /api/coding-meme
```

Response:
```json
{
    "success": true,
    "meme": {
        "url": "meme-image-url",
        "title": "meme-title",
        "author": "author-name",
        "source": "subreddit-name"
    }
}
```

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - node-fetch

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Memes sourced from Reddit communities:
  - r/ProgrammerHumor
  - r/codingmemes
  - r/programmingmemes 