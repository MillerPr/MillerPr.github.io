def solution(n):
  if int(n)==1:
    return 1
  print(n)
  n = int(n)
  cycleCount = 0
  if n%2!=0:
    n=n+1
    print(n)
    cycleCount += 1
  while n!=1:
    n = n/2
    print(n)
    cycleCount += 1
    if cycleCount > 40:
      break
  return cycleCount


#solution(4) returns 2: 4 -> 2 -> 1
#solution(15) returns 5: 15 -> 16 -> 8 -> 4 -> 2 -> 1
print(solution(309))
