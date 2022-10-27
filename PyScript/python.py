import datetime as dt

print('<h1>PyScript</h1>')
pyscript.write('today', dt.date.today().strftime('%A %B %d, %Y'))
i = 0
if i == 10:
    print('yes')
else:
    print('no')
