/ * * * * * * * * * * * * * * * * * * * * * * 

  Scraping My Facebook Name Groups
  
      Using Vanilla Javascript
            
               Fast Dev
            
          July , 30th ,2020
            
* * * * * * * * * * * * * * * * * * * * * * /

// Vanilla JavaScript

// Scraping My Facebook Groups
var results = []
var my_list = document.getElementById('pinnedNav').getElementsByTagName('ul')[0];
for(var i=0;i<=14;i++){
        results.push(my_list.children[i].querySelector('div.linkWrap').textContent);
        results.push('\n');
}

//Red Magic Button

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforebegin','<div class="my-div"><a id="pico"><button id="my-button" style="background-color:#f14e4e;display:inline-block;padding:0.3em 1.2em;color:#FFF;margin:0 0.1em 0.1em 0;border:0.16em solid rgba(255,255,255,0); border-radius:2em;text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);text-align:center;transition: all 0.2s;">Download</button></a></div>');
var btn_link = document.querySelector('#pico');
btn_link.setAttribute("download","myGroups.txt");

// Add the file to the download button
btn_link.setAttribute("href",window.URL.createObjectURL(new Blob(results,{type :'text'})));

// add event Listener
var btn = document.querySelector("#my-button");
btn.addEventListener("click",()=>btn_link.click())
