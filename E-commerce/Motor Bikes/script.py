import json;
fetch('https://www.dainese.com/be/en/motorbike/leather-suits/',
[
(fetch(link),[
print(json.dumps({
'title':r.css('div[class="product-name col-md-4"] > h4::text').get(),
'price': (r.css('span[class="price-sales"]::text').get()).strip('\n'),
'color' : ''.join(r.css('span[class="color-title"]::text').getall()[-1:]),
'description' : (r.css('div[class="short-description-section"]::text').get()).strip('\n'),
'size':'[str(size).strip('\n') for size in r.css('option[class="swatchanchor selectable"]::text').getall()]),
'image': r.css('img[class="productthumbnail tci-filter"]::attr(src)').get()},
indent=2,ensure_ascii=False)

) for r in response.css('body')])

for link in response.css('a.thumb-link::attr(href)').getall()]
)
