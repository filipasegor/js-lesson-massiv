
  class Person{
    constructor(name){
      this.name = name;
      this.happiness = 0;
    }
    hasCat(){
      return this.happiness = this.happiness + 1;
    }
    hasRest(){
      return this.happiness = this.happiness + 1;
    }
    hasMoney(){
      return this.happiness = this.happiness + 1;
    }
    isSunny(){
      const APIKey = "0d06ca6575a27b251c37fb74df640635";
      const city = "Москва";
      const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, false);
      xhr.send();
      let DATA = JSON.parse(xhr.responseText);
        if ((DATA.main.temp - 273) > 15) {
          return this.happiness = this.happiness + 1;
        } else {
          return this.happiness;
        }
    }
  };

window.addEventListener('load', function() {

  let person = new Person('');
  console.log(person);


  let container = document.querySelectorAll(".is-input-inner");
  console.log(container);

  let elements = document.querySelectorAll('.is-input[type=radio]');

  const form = document.forms[0];

  let icon = document.querySelector(".icon");
  let personName = document.querySelector(".personName");


  form.onsubmit = function(e){
    e.preventDefault();
    const APIKey = "0d06ca6575a27b251c37fb74df640635";
    const city = "Москва";
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();
    let DATA = JSON.parse(xhr.responseText);

    if ((DATA.main.temp - 273) < 15) {
      icon.innerHTML = "😐";

    } else {

      if (form.elements.cat.value === 'yes') {
        person.hasCat();
        console.log("Есть кот");
      } else {
        console.log("Нет кота")
      };

      if(form.elements.rest.value === 'yes'){
        person.hasRest();
        console.log("Отдыхал");
      }else {
        console.log("Не отдыхал");
      };

      if(form.elements.rest.value === 'yes'){
        person.hasRest();
        console.log("Отдыхал");
      }else {
        console.log("Не отдыхал");
      };

      if(form.elements.money.value === 'yes'){
        person.hasMoney();
        console.log("Ок");
      }else {
        console.log("Не ок");
      };

      person.isSunny();
      personName.innerHTML = form.elements.name.value;

      if (person.happiness === 4) {
        icon.innerHTML = "😁";
      }else if (person.happiness === 2 || 3) {
        icon.innerHTML = "😐";
      }else {
        icon.innerHTML = "☹️";
      };

      console.log(person);
    };
  };
  
});






// for (let j = 0; j < elements.length; j++){
//   console.log(elements[j]);
//    var inputValue =   elements[j].querySelectorAll("input[type=radio]")[0].value;
//   for (let n = 0; n < elements.length; n++) {
//     (inputValue[j][n].value === 'yes') ? console.log("У Ника есть кот") : console.log('У Ника нет кота');
//   }
// };
