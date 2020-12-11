
  class Person{
    constructor(name, happiness){
      this.name = name;
      this.happiness = 0;
    }
    hasCat(){
      return this.happiness + 1;
    }
    hasRest(){
      return this.happiness + 1;
    }
    hasMoney(){
      return this.happiness + 1;
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
          return this.happiness + 1;
        } else {
          return this.happiness;
        }
    }
  };


window.addEventListener('load', function() {
  let me = new Person ('Ник', 50);
  console.log(me.hasCat());
  console.log(me.isSunny());

});



let container = document.querySelectorAll(".is-input-inner");
console.log(container);

let inputRadio = document.querySelectorAll('input[type=radio]');
console.log(inputRadio);


form.onsubmit = function(e){
  e.preventDefault();
  let me = new Person (form.elements.name.value, 50);
  console.log(me);

  let elements = document.getElementsByTagName("input")

  for (let i = 0; i < elements.length; i++){

    (form.elements[i].value === 'yes') ? console.log('У Ника есть кот') : console.log('У Ника нет кота');
  };



}
