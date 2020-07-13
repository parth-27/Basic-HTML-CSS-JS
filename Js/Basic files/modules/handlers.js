export async function handleButtonClick(e){
    //const currenciesModule = await import('./currencies.js');     // importing on demand to make our website fast by not loading a lots of data before the time of need.
    //console.log(currenciesModule.default);  // accessing default property of the imported module.

    const {localCurrencies,default:currency} = await import('./currencies.js');     // importing with the help of destructuring.
    console.log(localCurrencies);   // named import 
    console.log(currency);      // default import
}