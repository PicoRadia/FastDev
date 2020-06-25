import json,scrapy;
[(scrapy.Request(
url='https://www.paris.cl/tecnologia/computadores/?start='+str(page)+'&sz='+str(page),
method = 'GET',
headers={
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' ,
},),

[
open('computer_prices.json','a').write(json.dumps(
{
	'model': r.css('span.ellipsis_text::text').get().strip('"'),
	'price': r.css('div.price > div::text ').get().strip()
},indent=2,ensure_ascii=False)+'\n')

for r in response.css('div.product-tile')])

for page in [0,40,8]]
