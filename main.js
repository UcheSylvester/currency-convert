
// GLOBAL VARIABLEAS

let currencies = [
    {
      name: "US Dollar",
      abbreviation: "USD",
      symbol: "\u0024",
	  flagURL: "http://www.geonames.org/flags/l/us.gif",
	  rate: 1.234
    },
    {
      name: "Euro",
      abbreviation: "EUR",
      symbol: "\u20AC",
      flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
	  rate: 1.4
	},
    {
      name: "Japanese Yen",
      abbreviation: "JPY",
      symbol: "\u00A5",
	  flagURL: "http://www.geonames.org/flags/l/jp.gif",
	  rate: 1.234
    },
    {
      name: "British Pound",
      abbreviation: "GBP",
      symbol: "\u00A3",
	  flagURL: "http://www.geonames.org/flags/l/uk.gif",
	  rate: 1.4
    },
    {
      name: "Australian Dollar",
      abbreviation: "AUD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/au.gif"
    },
    {
      name: "Canadian Dollar",
      abbreviation: "CAD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/ca.gif"
    },
    {
      name: "Swiss Franc",
      abbreviation: "CHF",
      symbol: "\u0043\u0048\u0046",
      flagURL: "http://www.geonames.org/flags/l/ch.gif"
    },
    {
      name: "Chinese Yuan Renminbi",
      abbreviation: "CNY",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
    {
      name: "Swedish Krona",
      abbreviation: "SEK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/se.gif"
    },
    {
      name: "New Zealand Dollar",
      abbreviation: "NZD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/nz.gif"
    },
    {
      name: "Mexican Peso",
      abbreviation: "MXN",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/mx.gif"
    },
    {
      name: "Singapore Dollar",
      abbreviation: "SGD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/sg.gif"
    },
    {
      name: "Hong Kong Dollar",
      abbreviation: "HKD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/hk.gif"
    },
    {
      name: "Norwegian Krone",
      abbreviation: "NOK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/no.gif"
    },
    {
      name: "South Korean Won",
      abbreviation: "KRW",
      symbol: "\u20A9",
      flagURL: "http://www.geonames.org/flags/l/kr.gif"
    },
    {
      name: "Turkish Lira",
      abbreviation: "TRY",
      symbol: "\u20BA",
      flagURL: "http://www.geonames.org/flags/l/tr.gif"
    },
    {
      name: "Russian Ruble",
      abbreviation: "RUB",
      symbol: "\u20BD",
      flagURL: "http://www.geonames.org/flags/l/ru.gif"
    },
    {
      name: "Indian Rupee",
      abbreviation: "INR",
      symbol: "\u20B9",
      flagURL: "http://www.geonames.org/flags/l/in.gif"
    },
    {
      name: "Brazilian Real",
      abbreviation: "BRL",
      symbol: "\u0052\u0024",
      flagURL: "http://www.geonames.org/flags/l/br.gif"
    },
    {
      name: "South African Rand",
      abbreviation: "ZAR",
      symbol: "\u0052",
      flagURL: "http://www.geonames.org/flags/l/za.gif"
    },
    {
      name: "Philippine Peso",
      abbreviation: "PHP",
      symbol: "\u20B1",
      flagURL: "http://www.geonames.org/flags/l/ph.gif"
    },
    {
      name: "Czech Koruna",
      abbreviation: "CZK",
      symbol: "\u004B\u010D",
      flagURL: "http://www.geonames.org/flags/l/cz.gif"
    },
    {
      name: "Indonesian Rupiah",
      abbreviation: "IDR",
      symbol: "\u0052\u0070",
      flagURL: "http://www.geonames.org/flags/l/id.gif"
    },
    {
      name: "Malaysian Ringgit",
      abbreviation: "MYR",
      symbol: "\u0052\u004D",
      flagURL: "http://www.geonames.org/flags/l/my.gif"
    },
    {
      name: "Hungarian Forint",
      abbreviation: "HUF",
      symbol: "\u0046\u0074",
      flagURL: "http://www.geonames.org/flags/l/hu.gif"
    },
    {
      name: "Icelandic Krona",
      abbreviation: "ISK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/is.gif"
    },
    {
      name: "Croatian Kuna",
      abbreviation: "HRK",
      symbol: "\u006B\u006E",
      flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
      name: "Bulgarian Lev",
      abbreviation: "BGN",
      symbol: "\u043B\u0432",
      flagURL: "http://www.geonames.org/flags/l/bg.gif"
    },
    {
      name: "Romanian Leu",
      abbreviation: "RON",
      symbol: "\u006C\u0065\u0069",
      flagURL: "http://www.geonames.org/flags/l/ro.gif"
    },
    {
      name: "Danish Krone",
      abbreviation: "DKK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/dk.gif"
    },
    {
      name: "Thai Baht",
      abbreviation: "THB",
      symbol: "\u0E3F",
      flagURL: "http://www.geonames.org/flags/l/th.gif"
    },
    {
      name: "Polish Zloty",
      abbreviation: "PLN",
      symbol: "\u007A\u0142",
      flagURL: "http://www.geonames.org/flags/l/pl.gif"
    },
    {
      name: "Israeli Shekel",
      abbreviation: "ILS",
      symbol: "\u20AA",
      flagURL: "http://www.geonames.org/flags/l/il.gif"
    }
];
  
const addCurrencyBtn = document.querySelector('.add-currency-button');
const addCurrencyList = document.querySelector('.add-currency-list');
// console.log(addCurrencyList)
const currenciesList = document.querySelector('.currencies');
let initiallyDisplayedCurrencies = ['USD', 'EUR', 'GBP', 'JPY'];

let baseCurrency, baseCurrencyAmount;

// Functions

// When addCurrencyBtn is clicked
function addCurrencyBtnClicked(e) {
    addCurrencyBtn.classList.toggle('open');
    addCurrencyList.classList.toggle('open');
    populateAddCurrencyList()
}

// showing currencies on the add currencies list
function populateAddCurrencyList() {

    // looping through currencies array and displaying them on the addCurrencyList
    currencies.forEach(currency => {
        // console.log(currency.flagURL, currency.name)
        const html = `
            <li data-currency=${currency.abbreviation}>
            <img src="${currency.flagURL}" alt="${currency.name} flag" class="flag">
            <span> ${currency.name} </span>    
            </li>
        `
        addCurrencyList.insertAdjacentHTML('beforeend', html)

    })
}


// To display some currencies at the start of the app
function populateCurrenciesList() {
    // check for matches for initiallyDisplayedCurrencies in currencies
    initiallyDisplayedCurrencies.forEach(currency => {
        const matchedCurrency = currencies.find(c => c.abbreviation === currency);
        // console.log(matchedCurrency);

        if(matchedCurrency) newCurrenciesListItem(matchedCurrency);
    })
}

// The list of new currencies to be displayed for conversion
function newCurrenciesListItem(currency) {
  if(currenciesList.childElementCount === 0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }

  // disabling selecting currency on currencies added for conversion
  addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled")
  
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;

  //   calculating exchange rate using tenary method
    const exchangeRate = (currency.abbreviation === baseCurrency) ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);

    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(4) : '';

    const htmlContent = `
    <li class="currency ${(currency.abbreviation === baseCurrency) ? "base-currency" : ''}" id=${currency.abbreviation}>
    <img src="${currency.flagURL}" alt="jp flag" class="flag">
    <div class="info">
      <p class="input">
        <span class="currency-symbol">${currency.symbol}</span>
        <input placeholder="0.00" value="${inputValue}">
      </p>
      <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
      <p class="base-currency-rate">I ${baseCurrency} = ${exchangeRate} ${currency.symbol}</p>
    </div>
    <span class="close" title="Remove">&times;</span>
  </li>
  ` 
  currenciesList.insertAdjacentHTML('beforeend', htmlContent)

}


// adding new currencies for conversion
addCurrencyList.addEventListener('click', addClickedCurrency);

function addClickedCurrency(e) {
  // console.dir(e.target)
  const clickedCurrency = e.target.closest('li');

  if(!clickedCurrency.classList.contains('disabled')) {
    const newCurrency = currencies.find(c => c.abbreviation === clickedCurrency.getAttribute('data-currency'));
    if(newCurrency) newCurrenciesListItem(newCurrency)
  }
}


// removing currencies from list
currenciesList.addEventListener('click', removeClickedCurrency);

function removeClickedCurrency(e) {
  const currencyToRemove = e.target.parentElement;

  if(e.target.classList.contains('close')) {
    currencyToRemove.remove();
  }
  // making the removed currency clickable on the addCurrencyList
  addCurrencyList.querySelector(`[data-currency=${currencyToRemove.id}]`).classList.remove("disabled");

  // setting a new base currency;
  if(currencyToRemove.classList.contains('base-currency')) {
    const newBaseCurrencyLI = currenciesList.querySelector('.currency');
    if(newBaseCurrencyLI) {
      setNewBaseCurrency(newBaseCurrencyLI);
      // setting base currency amount for the new base currency to it's input
      baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector('.input input'))
    }
  }

}

// working on new baseCurrency
function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add('base-currency');
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate;
  
  // editing the contents to match the new base currency
  const currenciesLI = currenciesList.querySelectorAll('.currency');
  currenciesLI.forEach(currencyLI => {
    const currencyRate = currencies.find(c => c.abbreviation = currencyLI.id).rate;
    const exchangeRate = (currencyLI.abbreviation === baseCurrency) ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
    currencyLI.querySelector('.base-currency-rate').textContent = `I ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`; 
  })
}

// what happens when there is value is  inputed
currencies.addEventListener('input', currenciesListInputChange);


// Calling functions
populateAddCurrencyList()

populateCurrenciesList()

// EVENT LISTENERS

addCurrencyBtn.addEventListener('click', addCurrencyBtnClicked);
