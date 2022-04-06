from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import pandas as pd
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup
import time

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

try:
    os.makedir(dir_path+ "/dividend")
except OSError as error:
    print(error)

CHROME_WEBDRIVER = dir_path + "/chrome/chromedriver"

options = Options()
options.headless = True


driver = webdriver.Chrome(CHROME_WEBDRIVER, chrome_options=options)
driver.set_page_load_timeout("30")

links = pd.read_csv("./links.csv", index_col=0).values[:,0]

def get_pagesource(url, driver):
    driver.get(url)
    driver.implicitly_wait(3)
    webdriver.ActionChains(driver).send_keys(Keys.ESCAPE).perform()
    for i in range(10):
        try:
            WebDriverWait(driver,10).until(EC.element_to_be_clickable((By.ID,"showMoreDividendsHistory"))).click()
        except:
            break

        time.sleep(2)

    return driver.page_source

def get_dividends(soup):
    symbol = soup.find('div', attrs={'class': "right general-info"}).find('span', string="S/N:").find_next_sibling('span').text
    table = soup.find('table', attrs={'class': 'genTbl closedTbl dividendTbl'})
    df = pd.read_html(str(table))
    symbol = soup.find('div', attrs={'class': "right general-info"}).find('span', string="S/N:").find_next_sibling('span').text
    table = soup.find('table', attrs={'class': 'genTbl closedTbl dividendTbl'})
    df = pd.read_html(str(table))[0].iloc[:,[0,1,3,4]]
    df.columns = ["ex_date", "amount", "pay_date", 'yield']
    df['ex_date'] = pd.to_datetime(df['ex_date'])
    df['pay_date'] = pd.to_datetime(df['pay_date'], errors='coerce')
    df['symbol'] = pd.Series(index=df.index, data=symbol)
    return df


dividend_data = pd.DataFrame(columns=['ex_date', 'amount', 'pay_date', 'yield' 'symbol'])
completed = []
incomplete = []
for i,link in enumerate(links):
    try:
        html = get_pagesource(link, driver)
        completed.append(link)
    except:
        incomplete.append(link)
        continue
    soup = BeautifulSoup(html)
    df = get_dividends(soup)
    symbol = df['symbol'].unique()[0]
    df.to_csv(f'./dividend/{symbol}.csv')
    dividend_data = dividend_data.append(df)
    if (i+1) % 5 == 0:
        dividend_data.to_csv('./dividend_data.csv', index=False)
        print("one batch "+ str(i))
    time.sleep(3)


driver.quit()