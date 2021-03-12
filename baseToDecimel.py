def solution(input, b):
  #input = '210022'
  #b is the radix
  cycleCount = 1
  runCycle(input, b, cycleCount)

def runCycle(input, b, cycleCount):

  tempInput = []
  k = len(input)

  for n in str(input):
    tempInput.append(n)

  positionIndex = k-1
  x = 0 #descending order
  y = 0 #ascending order

  tempInput.sort(reverse=True)
  for n in tempInput:
    x += (int(n) * (b**positionIndex))
    positionIndex = positionIndex -1
    print(x)

  positionIndex = k-1
  tempInput.sort()
  for n in tempInput:
    y += (int(n) * (b**positionIndex))
    positionIndex = positionIndex - 1
    print(y)

#make sure there are leading zeros in z to equal length of k.
  z = x - y
  z = str(z)
#convert to base 10 if necesary
  if b != 10:
    newZ = ''
    j = 1
    #d =1
    z = int(z)
    while j !=0: #j represents the quotient
      j = round(z/b)
      d = z%b #d represents the remainder, which becomes the indexed digit in the base
      newZ = str(d)+newZ #newZ is the concatenated sequence of new digits
      z = j

  while len(newZ) < len(k):
    newZ = '0'+newZ

  if newZ == input:
    return cycleCount
  cycleCount += 1

  runCycle(newZ, b, cycleCount)


print(solution('210022', 3))
