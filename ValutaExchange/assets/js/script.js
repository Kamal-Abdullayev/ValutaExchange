var url;
let input = document.getElementById("manat-input");
let button = document.querySelector(".btn.btn-primary");
let exchangeVal = document.querySelector(".exchange-val");
let firstSelect = document.querySelector(".first-val select");
let secondSelect = document.querySelector(".second-val select");

valueSellector();
button.addEventListener("click", () => {
    
    fetchText();
})


async function fetchText() {
    url = `https://api.exchangerate.host/latest?base=${firstSelect.value}`;
    let response = await fetch(url);
    data = await response.text();
    // let firstParsedData = JSON.parse(data).rates[firstSelect.value];
    // let changeUsd = firstParsedData * JSON.parse(data).rates["AZN"];

    let inputValue = input.value;
    let secondParsedData = JSON.parse(data).rates[secondSelect.value];
    newValuta =inputValue * secondParsedData;

    exchangeVal.innerHTML = ""
    exchangeVal.innerHTML += `
    <div class="exchange-value col-2">
        <h3>Result: <span>${newValuta}</span></h3>
    </div>
    `;
}


async function valueSellector() {
    let firstSellectedValues = document.querySelector(".first-val select");
    url = `https://api.exchangerate.host/latest?base=AZN`;
    
    let secondSellectedValues = document.querySelector(".second-val select");
    let response = await fetch(url);
    data = await response.text();
    
    let parsedData = Object.keys(JSON.parse(data).rates);

    parsedData.forEach(e =>{
        secondSellectedValues.innerHTML +=`
        <option value="${e}">${e}</option>
    `}); 
   
    parsedData.forEach(e =>{
        firstSellectedValues.innerHTML +=`
        <option value="${e}">${e}</option>
    `;})
}