from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
from bs4 import BeautifulSoup
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

# driver = webdriver.Chrome("C:/Users/ronmapue/Desktop/2020_projects/jobs")
driver = webdriver.Chrome(ChromeDriverManager().install())

dataframe = pd.DataFrame(
    columns=["Title", "Location", "Company", "Salary", "Sponsored", "Description"])

# TODO flexible search by starting on home page

driver.get("https://www.indeed.ca/jobs?q=Software+Developer&l=Richmond%2C+BC")

all_jobs = driver.find_elements_by_class_name('result')

for job in all_jobs:
    print("check 1")
    result_html = job.get_attribute('innerHTML')
    soup = BeautifulSoup(result_html, 'html.parser')

    try:
        title = soup.find("a", class_="jobtitle").text.replace('\n', '')
        print("check 2, Title: " + title)

    except:
        title = 'None'

    # TODO more try / except for critera: location, company, salary, sponsored, description

    sum_div = job.find_elements_by_class_name("summary")[0]

    print("check 3")

    sum_div.click()

    print("check 4")

    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, 'vjs-desc')))

    print("check 5")

    job_desc = driver.find_element_by_xpath(
        '//*[@id="vjs-desc"]').text

    print("check 5")

    print("job_desc", job_desc)
    # print("check 5 job_desc" + job_desc)

    # TODO append other data as described above
    df = dataframe.append({'Title': title}, ignore_index=True)
