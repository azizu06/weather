export async function render(data) {
  const location = document.querySelector('.location');
  const temp = document.querySelector('.temp');
  const actual = document.querySelector('.actual');
  const wind = document.querySelector('.wind');
  const humid = document.querySelector('.humid');
  const img = document.querySelector('.wIcon');
  location.innerText = data.location
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  temp.innerText = data.temp + ' °F';
  actual.innerText = 'Feels Like: ' + data.actual + ' °F';
  wind.innerText = 'Wind: ' + data.wind + ' MPH';
  humid.innerText = 'Humidity: ' + data.humidity + '%';
  try {
    const icon = await import(`./assets/${data.icon}.svg`);
    img.src = icon.default;
  } catch {
    const safe = await import('./assets/clear-day.svg');
    img.src = safe.default;
  }
}

export function convertTemp(btn, temp1, temp2, temp) {
  if (btn.innerText === '°C' && !btn.classList.contains('active')) {
    const btnF = document.querySelector('.tempF');
    btn.classList.add('active');
    btnF.classList.remove('active');
    const celTemp = (temp - 32) * (5 / 9);
    temp1.innerText = `${Number(celTemp.toFixed(1))} °C`;
    temp2.innerText = `Feels Like: ${Number(celTemp.toFixed(1))} °C`;
  } else if (btn.innerText === '°F' && !btn.classList.contains('active')) {
    const btnC = document.querySelector('.tempC');
    btn.classList.add('active');
    btnC.classList.remove('active');
    const fahrTemp = temp * (9 / 5) + 32;
    temp1.innerText = `${Number(fahrTemp.toFixed(1))} °F`;
    temp2.innerText = `Feels Like: ${Number(fahrTemp.toFixed(1))} °F`;
  }
}
