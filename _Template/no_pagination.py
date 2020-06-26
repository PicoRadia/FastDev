import scrapy,json;
(scrapy.Request(
url='',
method = 'GET',
headers={
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' ,
},),
[
print(json.dumps(
{
  '': r.css('').get(),
  '': r.css('').get(),
},
indent=2,ensure_ascii=False))
for r in response.css('')]
)
