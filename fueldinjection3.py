def solution(n):
  factorList = [16, 32, 64, 128, 256]
  cycleCount = 0
  if n == 0 or n == 1:
    return 1
  else:
    checkAnswer(n, cycleCount, factorList)

def checkAnswer(n, cycleCount, factorList):
  if n == 1:
    return print(cycleCount)
  else:
    cycleCount += 1
    if n % 2 != 0:
      for f in factorList:  # check factor +1
        if n + 1 == f:
          n = n + 1  # this is the only place we add one
          return checkAnswer(n, cycleCount, factorList)
        else: #otherwise just minus 1
          n = n - 1
          return checkAnswer(n, cycleCount, factorList)
    else:
      n = n/2
      return checkAnswer(n, cycleCount, factorList)

#solution(4)
#solution(15)
#solution(309)
#solution(64)
