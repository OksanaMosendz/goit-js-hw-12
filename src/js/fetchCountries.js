// import {input} from '../index';

function fetchCountries(name){

fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then((response)=>{
    return response.json();
  })
  .then((date)=>{
    console.log(date);
  })
}

export { fetchCountries }