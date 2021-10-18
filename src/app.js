console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugün = 9.30

let dolarDun = 9.20
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //hatalı 

console.log(euroDun)

//array : Çoğul olarak yazılır camelCase yazılır.
//camelCasing
//PascalCasing

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi","Kamu Konut Kredisi", "Ezgi Kredisi"]

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
   console.log("<li>" + konutKredileri[i] + "</li>") 
}
console.log("</ul>")
// var dolarDun = 9.20


// console.log(konutKredileri)