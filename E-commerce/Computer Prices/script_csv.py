import csv,scrapy;open('computer_prices.csv','w').write('model,price,\n');
[(scrapy.Request(
url='https://www.paris.cl/tecnologia/computadores/?start='+str(page)+'&sz='+str(page),
method = 'GET',
headers={
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' ,
},),

[
csv.writer(open('computer_prices.csv','a')).writerow(
[r.css('span.ellipsis_text::text').get().strip('"'),
r.css('div.price > div::text ').get().strip()]
)
for r in response.css('div.product-tile')])

for page in [0,40,8]]
