Feature: demo feature

    @demo
    Scenario Outline: browser run test
        Given Google page is opened
        When we enter the <searchItem>
        Then click on the first search item
        Then URL should match with <ExpectedURL>

    Examples:
        | Test_ID        | searchItem | ExpectedURL            |
        | demo_test_001  | WDIO       | https://webdriver.io/  |
