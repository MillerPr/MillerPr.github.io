from copy import deepcopy

def solution(map):
    width = len(map[0])
    height = len(map)
    ones = [(x, y) for x in range(width)
            for y in range(height) if map[y][x] == 1]
    min_length = float('inf')
    for x, y in ones:
        newmap = deepcopy(map)
        newmap[x][y] = 0
        min_length = min(min_length, get_path_length(newmap))
    return min_length

def get_path_length(newmap):
  return newmap


solution([[0, 1, 1, 0], [0, 0, 0, 1], [1, 1, 0, 0], [1, 1, 1, 0]])
#solution([[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]])
