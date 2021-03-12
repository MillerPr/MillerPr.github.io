class solution:
    def find_prime(primeNumber):
        for i in range(2, primeNumber):
            if primeNumber % i == 0:
                return False
        return True

    def getPrimeString(n):
      primeString = ''
      primeNumber = 2
      while len(primeString) < 10006:
          primeString += str(primeNumber)
          primeNumber += 1
          while not solution.find_prime(primeNumber):
              primeNumber += 1
      return primeString[n:n+5]

    def solution(n):
        print(solution.getPrimeString(n))
