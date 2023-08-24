from typing import List

def partitionLabels(s: str) -> List[int]:
    set = "".join(dict.fromkeys(s))
    partitionArray = []
    counter = 0
    res = []

    for i in range(len(set)):
        indexes = []
        for j in range(0, len(s)):
            if s[j] == set[i]:
                indexes.append(j)

        partition = [indexes[0], indexes[len(indexes) - 1]]

        bottom = partition[0]
        top = partition[1]

        if i == 0:
            partitionArray.append(partition)

        currentBottom = partitionArray[counter][0]
        currentTop = partitionArray[counter][1]

        if currentTop < bottom:
            counter += 1
            partitionArray.append(partition)
        elif bottom > currentBottom and top > currentTop:
            partitionArray[counter][1] = top
            if top + 1 == len(s):
               break 
                
    for i in range(0, len(partitionArray)):
        first = partitionArray[i][0]
        last = partitionArray[i][1]
        res.append(last - first + 1)

    return res 

