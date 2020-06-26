 
import json,scrapy;
[(scrapy.Request(
url=''+str(page),
method = 'GET',
headers={
		'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36' ,
},),

[
open('books.json','a').write(json.dumps(
{
	'' : ''.join(r.css('').get()),
	'' : ''.join(r.css('').get()),
	'' : ''.join(r.css('').get()),
	'' : ''.join(r.css('').get()),

}
,indent=2,ensure_ascii=False)+'\n')
for r in response.css('')])

for page in range(1,50)]
