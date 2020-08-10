/***********************************************\
     Script to scrape real estate properties
      from realtor.com in CSV format
             no pagination
               
                    by
                       
                PicoRadia
              
\***********************************************/
// import JQuery
var jq = document.createElement('script');
jq.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].append(jq)

properties = []
var adress = 'https://www.realtor.com/realestateandhomes-search/Orlando_FL';
fetch(adress)
.then(data => data.text())
.then(data => $(data).find('li[data-testid="result-card"]').each(function(index){
     
    var features = {
        'title' : $(this).find('span[class="jsx-1282218989"]:first-child').first().text(),
        'price' :$(this).find('span[data-label="pc-price"]')[0].textContent,
        'address' :  $(this).find('div[data-label="pc-address"]').text(),
        'bedrooms' : $(document).find('li[class="jsx-2256820618 prop-meta srp_list"]')[0].textContent ,
'bathrooms' : $(document).find('li[data-label="pc-meta-baths"]')[0].textContent ,
'area' : $(document).find('li[data-label="pc-meta-sqft"]')[0].textContent ,
'area lot' : $(document).find('li[data-label="pc-meta-sqftlot"]')[0].textContent ,
   

    };
    properties.push(features);
    

}))
// create CSV output
csv = 'title,price,address,bedrooms,bathrooms,area,area_lot\n';


// loop over properties
$.each(properties, function(index) {
  // create row string
  var row = '';

  // loop over object values within a given quote
  $.each(this, function(key, val) {
    row += '"' + val + '"' + ','
  });

  // slice last coma
  row = row.slice(0, -1);

  // append new line feed to the row
  row += '\n';

  // append row to csv  
  csv += row;
});

// create download link
$('head').append('<a download="properties.csv"></a>');

// create object URL
$('a[download="properties.csv"]').attr('href', window.URL.createObjectURL(
  new Blob([csv], {type: 'text/csv'})
));

// click download link
$('a[download="properties.csv"]')[0].click()
  
  
