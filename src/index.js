import './sass/main.scss';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const input= document.getElementById('search-box');


const DEBOUNCE_DELAY =300;

input.addEventListener (
  'input',
  debounce(
    () => fetchCountries(input.value),
    DEBOUNCE_DELAY
  )
);



