
function setCountryInfoStyle(){
  const countriesInfoListItems=document.querySelectorAll('.info-list__item');
  const countriesInfoListTitles=document.querySelectorAll('.info-list__title');
  const flagImg=document.querySelectorAll('.flag');
  const countryName=document.querySelector('.country-name');
 
  countryName.style.display='inline-block';
  countryName.style.fontSize='60px';

  setliStyle(countriesInfoListItems);
  setRightMargin(flagImg,10);
  setRightMargin(countriesInfoListTitles,10);
}

function setCountriesStyle(){
const countriesRefs=document.querySelectorAll('.country__item');
const flagImg=document.querySelectorAll('.flag');

setRightMargin(flagImg,10);
setliStyle(countriesRefs);
}

function setliStyle(liArray){
  liArray.forEach(ref =>{
    ref.style.display='flex';
    ref.style.listStyle='none';
    ref.style.fontSize='20px';
    ref.style.marginBottom='10px';
    ref.style.alignItems='center';
  })
}

function setRightMargin(refsArray,px){
  refsArray.forEach(
  ref=>ref.style.marginRight=`${px}px`)
};

export {setCountryInfoStyle, setCountriesStyle}