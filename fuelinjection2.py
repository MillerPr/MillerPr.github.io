def solution(n):
  factorList = [16, 32, 64, 128, 256]
  cycleCount = 0
  if n == 0:
    return 1
  else:
    checkAnswer(n, cycleCount, factorList)
    return

def checkAnswer(n, cycleCount, factorList):
  if n == 1:
    return cycleCount
  else:
    oddCheck(n, addCycleCount(cycleCount), factorList)
    return
    #return checkNearFactor(n, cycleCount, factorList)

def oddCheck(n, cycleCount, factorList):
  if n%2 != 0:
    checkNearFactor(n, cycleCount, factorList)
  else:
    divideNumber(n, cycleCount, factorList)

def checkNearFactor(n, cycleCount, factorList):
  for f in factorList:
    if n + 1 == f:
      n = n + 1 #this is the only place we add one
      divideNumber(n, cycleCount, factorList)
    else:
      minusOne(n, cycleCount, factorList)

def divideNumber(n, cycleCount, factorList):
  addCycleCount(n, cycleCount, factorList)
  n = n/2
  if n%2 != 0:
    minusOne(n, cycleCount, factorList)
  else:
    checkAnswer(n, cycleCount, factorList)

def minusOne(n, cycleCount, factorList):
  addCycleCount(n, cycleCount, factorList)
  n = n -1
  divideNumber(n, cycleCount, factorList)

def addCycleCount(n, cycleCount, factorList):
  cycleCount += 1
  n, cycleCount, factorList

solution(4)
#solution(15)
#solution(309)
#solution(64)
