from typing import List

def sortPeople(names: List[str], heights: List[int]) -> List[str]:

    dict = {}
    res = []

    for i in range(len(names)):
        dict[heights[i]] = names[i]

    heights.sort(reverse=True)

    for i in range(len(names)):
        res.append(dict.get(heights[i]))

    return res
