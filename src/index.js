import './styles.css';
import { getLocation } from './getData';
import { render } from './display';

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
