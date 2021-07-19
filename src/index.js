import './sass/main.scss';

import { fetchCountries, input} from './js/fetchCountries.js';
import debounce from 'lodash.debounce';



const DEBOUNCE_DELAY =300;

input.addEventListener (
  'input',
  debounce(
    () => fetchCountries(input.value.trim()),
    DEBOUNCE_DELAY
  )
);





