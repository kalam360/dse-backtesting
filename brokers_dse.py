#%%
import numpy as np
import pandas as pd
import requests
from bs4 import BeautifulSoup
import html5lib


# %%
html = requests.get("https://www.dsebd.org/list_of_member.php").content

# %%
soup = BeautifulSoup(html, 'lxml')
# %%
links = soup.find_all('a', attrs={'class': 'ab1'})
links = [f"https://www.dsebd.org/{a['href']}" for a in links if a['href'].split("?")[0] == "member_listing.php"]
# %%
links
# %%
for l in links:
    df = soup(requests.get(l).content)
    df = pd.read_html(str(df), 'bs4+html5lib')
    break
# %%

# %%
