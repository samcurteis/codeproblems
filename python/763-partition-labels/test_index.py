from index import partitionLabels

def test_function_returns_most_partitions_possible():

    testCase1 = {
        's': "ababcbacadefegdehijhklij",
        'output': [9,7,8]
    }

    testCase2 = {
        's': "eccbbbbdec",
        'output': [10]
    }

    assert partitionLabels(testCase1['s']) == testCase1['output']
    assert partitionLabels(testCase2['s']) == testCase2['output']
