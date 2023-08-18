def ringCount(rings):
    res = 0 
    rodArray = ['' for i in range(10)]
    for i in range(len(rings)):
        if i != 0 and i % 2 != 0:
            continue
        rodIndex = int(rings[i + 1])
        rod = rodArray[rodIndex]
        if rod != 'end':
            rodArray[rodIndex] = rod + rings[i]
            if 'R' in rodArray[rodIndex] and 'G' in rodArray[rodIndex] and 'B' in rodArray[rodIndex]:
                res += 1
                rodArray[rodIndex] = 'end'

    return res
