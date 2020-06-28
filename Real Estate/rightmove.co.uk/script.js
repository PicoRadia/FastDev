
// import jquery
var jq = document.createElement('script');
jq.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].append(jq);

properties = []
for (var page = 1; page<=41 ; page++)      
    fetch('https://www.rightmove.co.uk/property-for-sale/find.html?searchType=SALE&locationIdentifier=REGION%5E87490&insId=1&radius=0.0&minPrice=&maxPrice=&minBedrooms=&maxBedrooms=&displayPropertyType=&maxDaysSinceAdded=&_includeSSTC=on&sortByPriceDescending=&primaryDisplayPropertyType=&secondaryDisplayPropertyType=&oldDisplayPropertyType=&oldPrimaryDisplayPropertyType=&newHome=&auction=false&index=' + (page * 24).toString())
            .then(data => data.text())
            .then(data => $(data).find('div[class="propertyCard-wrapper"]').each(function(index){
            var params = {
                'title' : $(this).find('h2[class="propertyCard-title"]').text().trim(),
                'adress' : $(this).find('address[class="propertyCard-address"]').text().trim(),
                'description' : $(this).find('span[itemprop="description"]').text(),
                'date' : $(this).find('div[class="propertyCard-branchSummary-addedOrReduced"]').text(),
                //'image' : $(this).find('im[alt="Property Image 1"]').prop('src'),
                'phone' : $(this).find('a[class="propertyCard-contactsPhoneNumber"]').text(),
                'price' : $(this).find('div[class="propertyCard-priceValue"]').text().trim(),

            };
            properties.push(params);
        }));


// download output file
$('head').append('<a download="ok.json">');
$('a[download="ok.json"]').attr('href', window.URL.createObjectURL(
     new Blob([JSON.stringify(properties, null, 2)], {type: 'text'})
   )
 )
$('a[download="ok.json"]')[0].click()
