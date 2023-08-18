from index import ringCount

def test_function_returns_how_many_values_are_preceded_by_RGB():

    testCase1 = {
        "rings": "B0B6G0R6R0R6G9",
        "output": 1
    }

    testCase2 = {
        "rings": "B0R0G0R9R0B0G0",
        "output": 1
    }

    testCase3 = {
        "rings": "G4",
        "output": 0
    }

    assert ringCount(testCase1["rings"]) == testCase1["output"]
    assert ringCount(testCase2["rings"]) == testCase2["output"]
    assert ringCount(testCase3["rings"]) == testCase3["output"]
