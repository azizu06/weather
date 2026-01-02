import { KEY, BASE } from './config';

export async function getLocation(location) {
  try {
    const url = `${BASE}${location}?key=${KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const newData = {
      location: data.resolvedAddress,
      temp: data.currentConditions.temp,
      actual: data.currentConditions.feelslike,
      wind: data.currentConditions.windspeed,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
    };
    return newData;
  } catch (err) {
    alert(err);
  }
}
