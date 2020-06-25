import json,scrapy;
[(scrapy.Request(
url='http://books.toscrape.com/catalogue/page-'+str(page)+'.html',
method = 'GET',
headers={
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' ,
},),

[
open('books.json','a').write(json.dumps(
{
	'price' : ''.join(r.css('div[ class="product_price"] > p::text').getall()).split('\n')[0] ,
	'tite'  : ''.join(r.css('h3 > a::text').getall()),
	'stock' : ''.join(r.css('p[class="instock availability"]::text').getall()).strip(),
	'image' : 'http://books.toscrape.com/'+''.join(r.css('div[class="image_container"] > a > img::attr(src)').getall()).strip('..'),
	'star'  : ''.join([ok for ok in r.css('p::attr(class)').getall()][0]).split()[-1	]
}
,indent=2,ensure_ascii=False)+'\n')
for r in response.css('article[class="product_pod"]')])

for page in range(1,50)]
