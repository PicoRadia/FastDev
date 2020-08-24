 import json,re,csv;
#csv
#open('hrmonkeys.csv','w').write('Company Name,Location,Job type,Rating,Job details(time),Job details(price),Qualifications,Closing Date,Full job description,Duties and Responsibilities,Preferred Qualifications\n');
# remote
# base_url 
base_url = 'https://www.simplyhired.com'
# list of urls to scrape 
l =[]
# get all the link with pagination
[(fetch('https://www.simplyhired.com/search?q=cannabis+jobs&l=Remote&job=WbE9YtfIPQX4KIkH8RuRZtHkpfzVL47bS0K09zgBEeMtMWR59fIWyw&pn='+str(i)),
[l.append(base_url+str(r.css('a.card-link::attr(href)').get())) for r in response.css('div[class="SerpJob-jobCard card"]')]# get the links 
 ) for i in range(1,2)] # 13

# clean qualification
def clean_1(elements,pin):
    if elements :
        regex = r'''(<\w+( )*>)([^<]+)'''
        li =[l for l in re.findall(regex,elements)]
        li.pop(0)
        indexies = []
        for i in li :
            if i[0]=='<b>' :
                indexies.append(li.index(i))
        if pin==1 :
            my_list = li[:indexies[0]]
            text = ''
            for x in my_list : 
                if x is not None :
                    text= text + str(x[2].strip('\n'))
            return text 
        if pin ==2:
            my_list = li[indexies[0]+1:indexies[1]]
            text = ''
            for x in my_list : 
                if x is not None :
                    text= text + str(x[2].strip('\n'))
            return text 
        if pin ==3:
            my_list = li[indexies[1]+1:indexies[2]]
            text = ''
            for x in my_list : 
                if x is not None :
                    text= text + str(x[2].strip('\n'))
            return text 
    else : 
        return ""

# clean qualification 
def clean_2(text): 
    p = ''
    for x in text :
        p = p + '-' + str(x)
    return p
        

my_link = 'https://www.simplyhired.com/job/pOCdVeLCBoccX__-X0IkNGUDtnYlsOS8rrCPC4HCN331OF1n9qP3EQ?q=cannabis+jobs'
# crawling and getting the data
[(fetch(x),
[open('gig.json','a').write(json.dumps({
    "Company Name" : r.css('h2[class="viewjob-jobTitle h2"]::text').get(),
    "Location" : r.css('div[class="viewjob-labelWithIcon"]::text').get(),
    "Job type" : r.css('div[class="viewjob-labelWithIcon"]::text').getall()[1],
    "Rating" : r.css('span[class="CompanyRatings-ratingDigit"]::text').get(),
    "Job details(time) " : r.css('span[class="viewjob-labelWithIcon viewjob-jobType"]> span::text').get(),
    "Job details(price) " : r.css('span[class="viewjob-labelWithIcon viewjob-salary"]::text').getall()[1]  ,
    "Qualifications " : clean_2(r.css('li[class="viewjob-qualification"]::text').getall()),
    "Closing Date" :r.css('div > div:nth-child(5) > div > div.p::text').get(),
    "Full job description" : clean_1(r.css('div > div:nth-child(5) > div > div.p').get(),1),
    "Duties and Responsibilities":clean_1(r.css('div > div:nth-child(5) > div > div.p').get(),2),
    "Preferred Qualifications" : clean_1(r.css('div > div:nth-child(5) > div > div.p').get(),3),
    },indent=2,ensure_ascii=False)+'\n')


for r in response.css('aside[class="rpContent ViewJob ViewJob-redesign ViewJob-v3"]') if r is not None]) for x in l ]
