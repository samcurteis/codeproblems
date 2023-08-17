def numJewelsInStones(jewels, stones):
    counter = 0
    stones_list = list(stones)
    for stone in stones_list:
        if stone in jewels:
            counter += 1
    return counter
