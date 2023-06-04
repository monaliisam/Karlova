document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('contactForm');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Redirect to the thank you page
      window.location.href = 'thankyou.html';
    });
  
    function getWeather() {
      const apiKey = 'a4e8ba1f8bbb4f78aca933abd4607ff8';
      const apiUrl = 'http://api.weatherbit.io/v2.0/current?lat=58.37802&lon=26.7285&key=' + apiKey;
  
      // Make a request to the Weatherbit API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Extract the relevant weather information from the API response
          const temperature = data.data[0].temp;
          const weatherDescription = data.data[0].weather.description;
  
          // Display the weather information on the webpage
          const weatherElement = document.getElementById('weather');
          weatherElement.innerHTML = `Temperature: ${temperature}°C, Description: ${weatherDescription}`;
        })
        .catch(error => {
          console.log('Error retrieving weather data:', error);
        });
    }
  
    getWeather();
    
  });
  
  