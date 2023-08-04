Feature: Inventory check TestCase

    @invent
    Scenario Outline: Inventory Items
        Given Login to inventory web app
        Then  Inventory page should list <NumberOfItems>
        Then Validate all products have valid price

        Examples:
            | Test_ID       | NumberOfItems |
            | demo_test_001 | 6             |