 
#	* * * * * * * * * * * * * * * * * * * * * * *
#	*					                        *
#	*	       Scraping insta counts            *
#	*					                        *
#	*                  Fiverr Gig               *
#   *                                           *
#	*		               By                   *
#	* 					                        *
#	*		           Fast   Dev               *
#	*					                        *	
#	*			     October 05,2020	        *
#	*				                            *
#	* * * * * * * * * * * * * * * * * * * * * * *

from selenium import webdriver

import time
import os
import sys
import datetime 

# hashtag list
hashtags = []
with open('hashtags.txt' , 'r' ) as f : 
	hashtags = [line.strip() for line in f]

# base URL => the hashtag is added at the end
base_url = "https://www.instagram.com/explore/tags/"

# List containing all the links 
links = [base_url+hashtag for hashtag in hashtags]

# Insticiation the Chrome Driver
driver = webdriver.Chrome();

# listCounts => This list will contain the results of the hashtag count 
listCount = []



# Exception Handling
# if the corresponding page for the hashtag doesn't exist 404
# LOG Starting

print("* * * * * Starting * * * * * *\n")

for i in range(len(links)) :
	driver.get(links[i])
	try :
		print(" | Scraping the webpage : " + links[i] + "|  ")
		time.sleep(3)
		elem = driver.find_element_by_class_name('g47SY ').text
	except :
		# handling 404 page
		print("invalid hashtag")
		listCount.append("invalid hashtag")
	else :
		print("   =>result : " + elem + '\n')
		listCount.append(elem)
		

# file Name
current_date = datetime.datetime.now()
date = str(current_date.strftime("%Y-%m-%d %H:%M"))
file_name = date + ".txt"


# wrinting to file 
with open(file_name, 'w') as f:
    for count in listCount:
        f.write("%s\n" % count)


print("* * * * * Finished * * * * * * \n")


# closing the driver
driver.close()



