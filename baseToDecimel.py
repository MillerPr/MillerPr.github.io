def solution(input, b):
  #b is the radix
  cycleCount = 1
  PRIMARY = input
  cycleLog = {'1':0}
  return runCycle(input, b, cycleCount, PRIMARY, cycleLog)

def runCycle(input, b, cycleCount, PRIMARY, cycleLog):
  tempInput = []
  k = len(input)

  for n in str(input):
    tempInput.append(n)

  positionIndex = k-1
  x = 0 #descending order
  y = 0 #ascending order

  tempInput.sort(reverse=True) #711 in base 10
  for n in tempInput:
    x += (int(n) * (b**positionIndex))
    positionIndex = positionIndex -1
    #print(x)

  positionIndex = k-1
  tempInput.sort() #53 in base 10
  for n in tempInput:
    y += (int(n) * (b**positionIndex))
    positionIndex = positionIndex - 1
    #print(y)

#make sure there are leading zeros in z to equal length of k.
  z = x - y #658 in base 10
  #z = str(z) why cast to string?
#convert to base 10 if necesary
  if b != 10:
    newZ = ''
    j = 1
    #z = int(z)
    while j !=0: #j represents the quotient
      j = int(z/b)
      d = z%b #d represents the remainder, which becomes the indexed digit in the base
      newZ = str(d)+newZ #newZ is the concatenated sequence of new digits 220101 = 658
      z = j
      #return newZ
  else:
    newZ = str(z)

  while len(newZ) < k:
    newZ = '0'+newZ
  #Check each new cycle z-value to see if it is in the dictionary
  #If not, log each cycle z-value as key-val pair with the cycle number, e.g. 210111:3
  #If so, report the cycle value as the answer

  if newZ in cycleLog.keys():
    answer = cycleCount - cycleLog.get(newZ)
    return answer
  else:
    cycleLog[newZ] = cycleCount
    #print(newZ+' '+str(cycleCount))
    return runCycle(newZ, b, cycleCount+1, PRIMARY, cycleLog)


solution('210022', 3)
