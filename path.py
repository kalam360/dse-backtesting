import os 
dir_path = os.path.dirname(os.path.realpath(__file__))
print(dir_path)

try:
    os.makedirs(dir_path+ "/dividend")
except OSError as error:
    print(error)


print("file exist")


years = pd.date_range('2008', '2022', freq='y').year
data = xdse.schedule
for each in years:
    dates = data.loc[str(each)].index
    trading_days = pd.Series(1, index=dates)
    ax = july.calendar_plot(trading_days.index, trading_days.values, date_label=True)
    plt.title = "Calendar" + str(each)
    plt.savefig("./calendar/"+str(each)+'.jpg')