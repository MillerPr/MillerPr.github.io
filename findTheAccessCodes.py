def solution(l):
  size = len(l)
  tempTriple = [0] * size
  countTriples = 0

  for i in range(0, size): #for each item in the list
    j = 0 #set the second index to zero
    for j in range(0, i): #check backwards
      if l[i] % l[j] == 0: #check for divisible
        tempTriple[i] = tempTriple[i] + 1
        countTriples = countTriples + tempTriple[j]

  return countTriples


print(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  #3
#solution([1, 1, 1])
  #1
