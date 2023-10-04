
  // Replace 'YOUR_API_KEY' with your actual Giphy API key
  const apiKey = '1Lv4do5oHeisBbRMjXqufWXGXH9qa1P3';
  const randomGiphyDiv = document.getElementById('randomGiphy');
  const topics = ['HTML', 'coding','laptop','computer','typing']; // Add the topics you want

  // Function to fetch and display a random Giphy GIF on page load
  function getRandomGiphy() {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${randomTopic}`)
      .then((response) => {
        const gifUrl = response.data.data.images.original.url;

        // Create an image element to display the GIF
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', gifUrl);
        imageElement.setAttribute('width', '480');
        imageElement.setAttribute('height', '270');

        // Replace the content of the randomGiphyDiv with the image element
        randomGiphyDiv.innerHTML = '';
        randomGiphyDiv.appendChild(imageElement);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Call the function to fetch and display a random Giphy GIF on page load
  getRandomGiphy();
