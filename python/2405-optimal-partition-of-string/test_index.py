from index import partitionString

def test_returns_min_count_of_paritions_with_non_repeating_letters():

    testCase1 = {
        's': "abacaba",
        'output': 4
    }

    testCase2 = {
        's': "ssssss",
        'output': 6
    }

    testCase3 = {
        's': "cuieokbs",
        'output': 1
    }

    assert partitionString(testCase1['s']) == testCase1['output']
    assert partitionString(testCase2['s']) == testCase2['output']
    assert partitionString(testCase3['s']) == testCase3['output']
