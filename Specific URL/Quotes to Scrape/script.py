# one line
import json;[(fetch('https://quotes.toscrape.com/page/'+str(page)),[open('qotes.json','a').write(json.dumps({'quote' :r.css('span.text::text').get(),'author':r.css('small.author::text').get()},indent=2,ensure_ascii=False)+'\n') for r in response.css('div.quote')])for page in range(1,10)]

