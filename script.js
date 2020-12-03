
const form = document.forms[0];
const resultTemp = document.querySelector('.resultTemp');
const resultWind = document.querySelector('.resultWind');

form.onsubmit = function(e) {
  const APIKey = "0d06ca6575a27b251c37fb74df640635";
  const city = (form.elements.cityName.value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);

  xhr.send();
  e.preventDefault();

    if (xhr.status != 200) {
      console.log(xhr.status + ' '+ xhr.statusText);
    } else {
      let DATA = JSON.parse(xhr.responseText);
      console.log(DATA);
      resultTemp.innerHTML = (DATA.main.temp - 273);
      resultWind.innerHTML = (DATA.wind.speed);
    }
};



console.log(form);
