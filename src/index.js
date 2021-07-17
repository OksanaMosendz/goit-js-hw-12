import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';

const input= document.getElementById('search-box');

const DEBOUNCE_DELAY = 300;


// export {input};

input.addEventListener('input',() => fetchCountries(input.value));
