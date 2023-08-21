def findingUsersActiveMinutes(logs, k):
    counter = {}
    response = [0]*k

    for log in logs:
        id = log[0]
        minute = log[1]
        
        if not counter.get(id):
            counter[id] = [minute]
        else:
            counter[id] = counter[id] + [minute]

    for key, value in counter.items():
        response[len(set(value)) - 1] += 1

    return response
