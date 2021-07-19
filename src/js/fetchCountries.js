import countryCard from '../template/country-card.hbs';
import countriesListCard from '../template/countries-cards.hbs';
import Notiflix from "notiflix";

const countryList=document.querySelector('.country-list');
const countryInfo=document.querySelector('.country-info');
const input= document.getElementById('search-box');

function fetchCountries(name){
    if (input.value===''){return;}
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
    .then((response)=>{
      if (!response.ok){
        throw new Error(response.status);
      }
      return response.json();
    })

    .then((country)=>{
      countryList.innerHTML='';
      countryInfo.innerHTML='';  

      if (country.length>2&&country.length<=10){
        let markup= countriesListCard(country);
        countryList.innerHTML=markup;
        setCountriesStyle();
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
    .catch(error=>Notiflix.Notify.failure('Oops, there is no country with that name')
  )
}

export { fetchCountries}
export { input}

function setCountriesStyle(){
const countriesRefs=document.querySelectorAll('.country__item');

countriesRefs.forEach(ref =>{
  ref.style.display='flex';
  ref.style.listStyle='none';
  ref.style.fontSize='20px';
  ref.style.marginBottom='20px';
})}
