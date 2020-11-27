let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]




const forms = document.querySelectorAll('form')

const progressBarInner = document.getElementsByClassName('progress-bar-inner');
console.log(progressBarInner[1]);

const par = document.querySelectorAll('p');
console.log(par);

for (form of forms){
  console.log(form);
};

// document.getElementById("bitcoin-inner").innerHTML = crypto[0].price;
// document.getElementById("ethereum-inner").innerHTML = crypto[1].price;
// document.getElementById("litecoin-inner").innerHTML = crypto[2].price;


for (let i = 0; i < crypto.length; i++){
  par[i].innerHTML = crypto[i].price;
  progressBarInner[i].style.width = ((crypto[i].price * 100) / 1388.37) + '%';
}
