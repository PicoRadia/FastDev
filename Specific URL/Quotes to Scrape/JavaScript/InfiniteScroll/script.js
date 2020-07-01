 
 /****************************************************\
|           Scraping Infinite Scroll                   |
|                                                      |
|                API fetching                          |
|                                                      |
|                    By Fast Dev                       |
|______________________________________________________|
|                                                      |
|  1. Navigate to "https://quotes.toscrape.com"        |
|  2. Click the red  download button .                 |
|  3. Download the json file.                          |
|                                                      |
|     You should get 'myQuotes.json' file downloaded   |
|                                                      |
 \****************************************************/
 
 
 
/**** Vanilla JavaScript ****/

// RED MAGIC BUTTON

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin','<div class="my-div"><a id="pico"><button id="my-button" style="background-color:#f14e4e;display:inline-block;padding:0.3em 1.2em;color:#FFF;margin:0 0.1em 0.1em 0;border:0.16em solid rgba(255,255,255,0); border-radius:2em;text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);text-align:center;transition: all 0.2s;">Download</button></a></div>');
var btn_link = document.querySelector('#pico');
btn_link.setAttribute("download","myQuotes.json");

// fetching The API 
results = [];
for(let page = 1;page<=10;page++){
let  a = await fetch('http://quotes.toscrape.com/api/quotes?page=' + (page).toString())
.then(response => response.json())
.then(data =>
{ 
    for(var i =0;i<=9;i++){
        results.push(data.quotes[i])
    }
})}

// Creating a Blob object
var my_blob = new Blob([JSON.stringify(results, null, 2)],{type :'text'})

// Adding the Blob to the button
btn_link.setAttribute("href",window.URL.createObjectURL(my_blob));
