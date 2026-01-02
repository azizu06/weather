import './styles.css';
import { getLocation } from './getData';
import { render, convertTemp } from './display';

const fahr = document.querySelector('.tempF');
const cel = document.querySelector('.tempC');
const search = document.querySelector('.box');
search.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const location = search.value.trim();
    const data = await getLocation(location);
    render(data);
  } else {
    return;
  }
});

async function init() {
  const data = await getLocation('Orlando Florida');
  render(data);
}

fahr.addEventListener('click', () => {
  const temp = document.querySelector('.temp');
  const temp2 = document.querySelector('.actual');
  const tempNum = parseFloat(temp.innerText);
  convertTemp(fahr, temp, temp2, tempNum);
});

cel.addEventListener('click', () => {
  const temp = document.querySelector('.temp');
  const temp2 = document.querySelector('.actual');
  const tempNum = parseFloat(temp.innerText);
  convertTemp(cel, temp, temp2, tempNum);
});

init();
