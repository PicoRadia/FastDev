# one line
import scrapy,json;(scrapy.Request('https://www.dontpayfull.com/browse/'),[open('code.json','a').write(json.dumps({'store':r.css("div.ostore > a::text").get(),'code':r.css('span.ocode::text').get()},indent=2)+'\n') for r in  response.css('div.ocontent')])
