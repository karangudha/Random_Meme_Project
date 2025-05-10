document.addEventListener('DOMContentLoaded', () => {
    const memeImage = document.getElementById('memeImage');
    const newMemeBtn = document.getElementById('newMemeBtn');

    // Function to set loading state
    function setLoading(isLoading) {
        newMemeBtn.disabled = isLoading;
        newMemeBtn.textContent = isLoading ? 'Loading...' : 'Get New Coding Meme';
        if (isLoading) {
            memeImage.style.opacity = '0.5';
        } else {
            memeImage.style.opacity = '1';
        }
    }

    // Function to fetch a random coding meme
    async function getRandomMeme() {
        setLoading(true);
        try {
            const response = await fetch('/api/coding-meme');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received coding meme data:', data);

            if (data.success && data.meme.url) {
                memeImage.src = data.meme.url;
                memeImage.alt = data.meme.title || 'Coding Meme';
            } else {
                throw new Error('No coding meme URL found in response');
            }
        } catch (error) {
            console.error('Error fetching coding meme:', error);
            memeImage.src = 'https://http.cat/500';
            memeImage.alt = 'Error loading coding meme';
        } finally {
            setLoading(false);
        }
    }

    // Load a meme when the page loads
    getRandomMeme();

    // Add click event listener to the button
    newMemeBtn.addEventListener('click', getRandomMeme);
});
