document.addEventListener('DOMContentLoaded', function() {
  // Gets the form element
  var form = document.getElementById('contactForm');

  // Added an event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirects to the thank you page
    window.location.href = 'thankyou.html';
  });
  
    // Retrieves weather information from the Weatherbit API
  function getWeather() {
    const apiKey = 'a4e8ba1f8bbb4f78aca933abd4607ff8';
    const apiUrl = 'http://api.weatherbit.io/v2.0/current?lat=58.37802&lon=26.7285&key=' + apiKey;

    // Makes a request to the Weatherbit API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extracts the relevant weather information from the API response
        const temperature = data.data[0].temp;
        const weatherDescription = data.data[0].weather.description;

        //  Should display the weather information on the webpage
        const weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `Temperature: ${temperature}°C, Description: ${weatherDescription}`;
      })
      .catch(error => {
        console.log('Error retrieving weather data:', error);
      });
  }

  getWeather();




  var texts = [
    "Maldena, a picturesque neighborhood in Tartu, Estonia, enthralls visitors with its enchanting historic wooden houses and meandering streets. Immerse yourself in its vibrant community ambiance and partake in the array of cultural events that make Maldena a beloved destination for locals and tourists alike.",
    "Nestled in the heart of Tartu, Estonia, Maldena boasts a captivating charm derived from its well-preserved wooden houses and idyllic atmosphere. Wander through its narrow streets, and you'll discover a place that effortlessly combines heritage, warmth, and a strong sense of community.",
    "Step into the enchanting neighborhood of Maldena, where time seems to stand still amidst the delightful backdrop of historic wooden houses. Uncover hidden treasures as you stroll through its winding streets, and experience the lively spirit of this unique corner of Tartu, Estonia."
  ];

  // Selects the dynamicText element
  var dynamicText = document.getElementById("dynamicText");

  // Generates a random index to select a random text from the array
  var randomIndex = Math.floor(Math.random() * texts.length);

  // Should set the text content of dynamicText to the randomly selected text
  dynamicText.textContent = texts[randomIndex];



  

  function getRandomColor() {
    // This generates random RGB values for dark green
    var r = Math.floor(Math.random() * 50);
    var g = Math.floor(Math.random() * 100) + 100;
    var b = Math.floor(Math.random() * 50);
  
    // This converts RGB values to hexadecimal format
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    
    return color;
  }
  
  // when the page is loaded, the header should change colour
  window.addEventListener('load', function() {
    var header = document.getElementById("myHeader");
    header.style.backgroundColor = getRandomColor();
  });
  
  
});