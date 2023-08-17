from index import numJewelsInStones

def test_function_returns_number_of_jewels_in_stones_string():
    testCase1 = {
        'jewels': 'aA',
        'stones': 'aAAbbbb',
        'output': 3
    }

    testCase2 = {
        'jewels': 'z',
        'stones': 'ZZ',
        'output': 0
    }

    assert numJewelsInStones(testCase1['jewels'], testCase1['stones']) == testCase1['output']
    assert numJewelsInStones(testCase2['jewels'], testCase2['stones']) == testCase2['output']
