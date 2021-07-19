import './sass/main.scss';
import { input } from './js/fetchCountries.js';
import { fetchCountries} from './js/fetchCountries.js';
import debounce from 'lodash.debounce';



const DEBOUNCE_DELAY =300;

input.addEventListener (
  'input',
  debounce(
    () => fetchCountries(input.value.trim()),
    DEBOUNCE_DELAY
  )
);





