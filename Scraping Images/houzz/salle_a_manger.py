a= [] ; [(fetch("https://www.houzz.fr/photos/idees-deco-de-salles-a-manger-phbr0-bp~t_11141?fi=page+9"),[a.append(r.css('img::attr(src)').get()) for r in response.css('div[class="hz-space-card__image-wrapper"]>picture')])  for page in range(51)];len(a)