def solution(n):
  n = int(n)
  cycleCount = 0
  if n == 0 or n == 1:
    return 1
  else:
    return print(checkAnswer(n, cycleCount))

def checkAnswer(n, cycleCount):
  if n == 1:
    return cycleCount
  else:
    cycleCount += 1
    #print(cycleCount)
    if n % 2 != 0:
      for f in range(310):
        if n + 1 == 2**f:
          #print(2**f)
          n = n + 1  # this is the only place we add one
          while f >= 2:
            f = f/2
            cycleCount += 1
          return int((cycleCount + 1) + f)
          #return checkAnswer(n, cycleCount)
      else: #otherwise just minus 1
        n = n - 1
        return checkAnswer(n, cycleCount)
    else:
      n = int(n//2)
      return checkAnswer(n, cycleCount)

#solution('15')
#solution('99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999')
solution('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999')
#solution(309)
#solution(64)
#solution(4)
