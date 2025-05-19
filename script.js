function getWeather() {
  const city = document.getElementById('cityInput').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
    .then(response => response.json())
    .then(data => {
      const output = \`Temperature in \${data.name}: \${data.main.temp}°C\`;
      document.getElementById('weatherResult').innerText = output;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerText = "City not found or API error.";
    });
}

function addWeather() {
  const input = document.getElementById('weatherInput');
  const city = input.value;
  let list = JSON.parse(localStorage.getItem('weatherList')) || [];
  list.push(city);
  localStorage.setItem('weatherList', JSON.stringify(list));
  displayWeatherList();
  input.value = '';
}

function displayWeatherList() {
  const list = JSON.parse(localStorage.getItem('weatherList')) || [];
  const ul = document.getElementById('weatherList');
  ul.innerHTML = '';
  list.forEach((item, index) => {
    ul.innerHTML += \`<li>\${item} <button onclick="deleteWeather(\${index})">Delete</button></li>\`;
  });
}

function deleteWeather(index) {
  let list = JSON.parse(localStorage.getItem('weatherList'));
  list.splice(index, 1);
  localStorage.setItem('weatherList', JSON.stringify(list));
  displayWeatherList();
}

function addSports() {
  const input = document.getElementById('sportsInput');
  const team = input.value;
  let list = JSON.parse(localStorage.getItem('sportsList')) || [];
  list.push(team);
  localStorage.setItem('sportsList', JSON.stringify(list));
  displaySportsList();
  input.value = '';
}

function displaySportsList() {
  const list = JSON.parse(localStorage.getItem('sportsList')) || [];
  const ul = document.getElementById('sportsList');
  ul.innerHTML = '';
  list.forEach((item, index) => {
    ul.innerHTML += \`<li>\${item} <button onclick="deleteSports(\${index})">Delete</button></li>\`;
  });
}

function deleteSports(index) {
  let list = JSON.parse(localStorage.getItem('sportsList'));
  list.splice(index, 1);
  localStorage.setItem('sportsList', JSON.stringify(list));
  displaySportsList();
}

window.onload = function() {
  if (document.getElementById('weatherList')) displayWeatherList();
  if (document.getElementById('sportsList')) displaySportsList();
};