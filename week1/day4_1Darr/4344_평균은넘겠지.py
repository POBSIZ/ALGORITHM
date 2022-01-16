C = int(input())
N = 0
gradeArr = []
avg = 0
avgUp = 0
result = 0

for i in range(0, C):
    N = list(map(int, input().split()))
    for k in range(1, len(N)):
        gradeArr.append(N[k])
        avg += N[k]
    avg /= len(N)-1

    for j in range(0, len(gradeArr)):
        if gradeArr[j] > avg:
            avgUp += 1
    result = (avgUp / len(gradeArr)) * 100
    print("%.3f%%"% result)
    gradeArr = []
    avg = 0
    avgUp = 0
    result = 0