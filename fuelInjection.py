def solution(n):
  n = int(n)
  cycleCount = 0
  if n%2!=0:
    n=n+1
    cycleCount += 1
  while n!=1:
    n = n/2
    cycleCount += 1
  return cycleCount


#solution(4) returns 2: 4 -> 2 -> 1
#solution(15) returns 5: 15 -> 16 -> 8 -> 4 -> 2 -> 1
print(solution(15))
