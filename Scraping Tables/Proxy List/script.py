# one line
import csv;open('proxies.csv','w').write('IP Address,Port,Code,Country,Anonymity,Google,Https,Last Checked\n');(fetch('http://www.free-proxy-list.net/'),[csv.writer(open('proxies.csv','a')).writerow((r.css('td::text').getall())) for r in response.css('table').css('tr') if len(r.css('td')) and r.css('td::text').getall()[4]=='elite proxy' and r.css('td::text').getall()[6]=='yes' ])
