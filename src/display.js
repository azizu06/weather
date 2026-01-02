export function render(data) {
  const location = document.querySelector('.location');
  const temp = document.querySelector('.temp');
  const actual = document.querySelector('.actual');
  const wind = document.querySelector('.wind');
  const humid = document.querySelector('.humid');
  location.innerText = data.location
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  temp.innerText = data.temp + ' °F';
  actual.innerText = 'Feels Like: ' + data.actual + ' °F';
  wind.innerText = 'Wind: ' + data.wind + ' MPH';
  humid.innerText = 'Humidity: ' + data.humidity + '%';
}
