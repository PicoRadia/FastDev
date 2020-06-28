// import jquery
var jq = document.createElement('script');
jq.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.getElementsByTagName('head')[0].append(jq);

properties =[]

for (var page = 1; page<=10 ; page++)  
     fetch('http://quotes.toscrape.com/page/' + (page).toString())
                .then(data => data.text())
                .then(data => $(data).find('div[class="quote"]').each(function(index){
                var params = {
                    'quote' : $(this).find('span[class="text"]').text().trim(),
                    'author' : $(this).find('small.author').text().trim(),
                   
                };
                console.log(params.length);
                properties.push(params)   }));
                
// Download json file                
$('head').append('<a download="ok.json">');
$('a[download="ok.json"]').attr('href', window.URL.createObjectURL(
     new Blob([JSON.stringify(properties, null, 2)], {type: 'text'})
   )
 );
$('a[download="ok.json"]')[0].click()            
