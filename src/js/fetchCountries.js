import countryCard from '../template/country-card.hbs';
import countriesListCard from '../template/countries-cards.hbs';
const countryList=document.querySelector('.country-list');
const countryInfo=document.querySelector('.country-info');


function fetchCountries(name){
  
  fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
    .then((response)=>{
      return response.json();
    })
    .then((country)=>{
       console.log(country);
      

       if (country.length===1){
      let markup= countryCard(country);
      countryInfo.innerHTML=markup;
       console.log(markup);
       }
       
       else {
        let markup= countriesListCard(country);
        countryList.innerHTML=markup;
         console.log(markup);}
    })

}

export { fetchCountries }