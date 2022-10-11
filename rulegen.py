# This is a simple tool for generating the rules for the combos.
# It only works with the ESP keyboard layout, though you can change
#   for any keyboard layout by changing the keys that are required
# -----------------------------------------
# To use it, simply run python rulegen.py.
# Write the key combination and then the actual output
# eg. klñ<cr>m<cr>
#
# When you've written all the necessary rules, just TYPE 'END' instead
#   of a combination and enter a few times.
# Your result will get printed into the screen.

combos = []
cmd = ""
while cmd != "END":
    cmd = input()
    key = input()
    combo = [0, 0, 0, 0, 0, 0, 0, 0]
    if cmd.__contains__('u'):
        combo[0] = 1
    if cmd.__contains__('i'):
        combo[1] = 1
    if cmd.__contains__('o'):
        combo[2] = 1
    if cmd.__contains__('p'):
        combo[3] = 1
    if cmd.__contains__('j'):
        combo[4] = 1
    if cmd.__contains__('k'):
        combo[5] = 1
    if cmd.__contains__('l'):
        combo[6] = 1
    if cmd.__contains__('ñ'):
        combo[7] = 1
    combos.append([combo, key])

for combo in combos:
    tt = ""
    for c in combo[0]:
        tt += str(c)

    res = "rules.set( '" + tt + "', '" + combo[1] + "' );"
    print(res)
