#Find Even numbers
n=10
for i in range(1,n+1):
    if i%2==0:
        print(i)

#Find Odd numbers
n=10
for i in range(1,n+1):
    if i%2!=0:
        print(i)

#Numbers divisible by 3
n=30
for i in range(1,n+1):
    if i%3==0:
        print(i)

#In 3 tables print only divisible by 5
n=30
for i in range(1,n+1):
    if i%3==0 and i%5==0:
        print(i)

# if div by 3 print aaa ,if div by 5 print bbb,if div by 3 and 5 print ccc
n=30
for i in range(1,n+1):
    if i%3==0 and i%5==0:
        print("ccc")
    elif i%3==0:
        print("aaa")
    elif i%5==0:
        print("bbb")