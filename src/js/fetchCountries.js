import countryCard from '../template/country-card.hbs';
import countriesListCard from '../template/countries-cards.hbs';
import Notiflix from "notiflix";
import { setCountriesStyle, setCountryInfoStyle} from './style';

const countryList=document.querySelector('.country-list');
const countryInfo=document.querySelector('.country-info');
const input= document.getElementById('search-box');

function fetchCountries(name){
    if (input.value===''){
      return;
    }

    fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
    .then((response)=>{
      if (!response.ok){
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((country)=>{
      clearMarkup() 
      if (country.length>=2&&country.length<=10){
        countryList.innerHTML=countriesListCard(country);
        setCountriesStyle();
      }
      else if (country.length===1){
        country[0].languages=country[0].languages.map((l)=>l.name).join(', '); 
        countryInfo.innerHTML=countryCard(country);
        setCountryInfoStyle();
      }

      else if (country.length>10){
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
    })
    .catch(error=>{
      clearMarkup()
      Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    )
}

function clearMarkup(){
  countryList.innerHTML='';
  countryInfo.innerHTML='';
}

export { fetchCountries, input}