// page counter
var page = 1;
// properties
var properties = [];
// pagination crawler method
function crawlNextPage() {
  // open URL in a new window
  var response = window.open('https://www.idealista.com/en/venta-viviendas/madrid-madrid/', 'new', true);

  // init window onload function
  response.onload = function crawlNextPage() {
    // wait until content is fetched on a newly created window
    setTimeout(function () {
      if ($(response.document).find('li[class="next"] a')[0]) {  
        // print debug info
        console.log('crawling next page...');
       // data extraction logic
       $(response.document).find('article[class="item item_contains_branding item_hightop item-multimedia-container"]').each(function(){

               var features = {
                "title" : $(this).find('a.item-link').text(),
                "Detail" :$(this).find('span.item-detail').eq(2).text(),
                "Price" : $(this).find('span.item-price').text(),
                "Area(m^2)" : $($(this).find('span.item-detail')).eq(1).text(),
                "Decription" :$(this).find('p.ellipsis').text(),
                "Phone Number" : $(this).find('span.icon-phone').text()

            };
               console.log(features);
                // store item in properties list
               properties.push(features)

            })

        //extract and click next page URL
      
        page++;
        // crawl pagination recursively
      if (page < 10){
          
          $(response.document).find('li[class="next"] a')[0].click();
          crawlNextPage();
      }
        else
          console.log('Reached page limit number!');
      } else {
        console.log('All done!');
      }
    },3000) // crawl delay
  };
}
crawlNextPage() 
