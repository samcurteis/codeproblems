def partitionString(s: str) -> int:
    res = 0
    partition = ''

    for i in range(len(s)):
        if i == len(s) - 1:
            res += 1
        if s[i] not in partition:
            partition += s[i]
        else:
            res += 1
            partition = s[i]

    return res
