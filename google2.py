def getParentIndex(h, q):
    ## determine top node value
    topNode = 2**h - 1
    if topNode < q:
        return -1

    else:
        nodeOffsetValue = 0
        continueBoolean = True
        totalNodesInSubtree = topNode
        p = -1

        while continueBoolean: #check for truthiness
            if totalNodesInSubtree == 0:
                continueBoolean = False

            # use BitWise operator for // 2**y
            totalNodesInSubtree = totalNodesInSubtree >> 1
            leftNode = nodeOffsetValue + totalNodesInSubtree
            rightNode = leftNode + totalNodesInSubtree
            testForAnswer = rightNode + 1

            # check for p
            if (leftNode == q) or (rightNode == q):
                p = testForAnswer
                continueBoolean = False

            if (q > leftNode):
                nodeOffsetValue = leftNode

        return p

def solution(h, q):
    return [getParentIndex(h, x) for x in q]

print(solution(3, [1,4,7]))
# output 3, 6, -1
print(solution(5, [19,14,28]))
# output 21, 15, 29
print(solution(3, [7,3,5,1]))
# output -1, 7, 6, 3
