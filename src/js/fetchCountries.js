import countryCard from '../template/country-card.hbs';
import countriesListCard from '../template/countries-cards.hbs';
import Notiflix from "notiflix";

const countryList=document.querySelector('.country-list');
const countryInfo=document.querySelector('.country-info');


function fetchCountries(name){
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
    
    .then((response)=>{
      return response.json();
    })

    .then((country)=>{
      countryList.innerHTML='';
      countryInfo. innerHTML='';  

      if (country.length>2&&country.length<10){
        let markup= countriesListCard(country);
        countryList.innerHTML=markup;
      }
      else if  (country.length===1){
          country[0].languages=country[0].languages.map((l)=>l.name).join(', '); 
          let markup= countryCard(country);  
          countryInfo.innerHTML=markup;
      }
      else if (country.length>10){
      
     Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      }
    })
}

export { fetchCountries }