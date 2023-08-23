from index import sortPeople

def test_function_returns_order_tallest_to_shortest():

    testCase1 = {
        'names': ["Mary","John","Emma"],
        'heights': [180,165,170],
        'output': ["Mary","Emma","John"]
    }

    testCase2 = {
        'names': ["Alice","Bob","Bob"],
        'heights': [155,185,150],
        'output': ["Bob","Alice","Bob"]
    }

    assert sortPeople(testCase1['names'], testCase1['heights']) == testCase1['output']
    assert sortPeople(testCase2['names'], testCase2['heights']) == testCase2['output']
