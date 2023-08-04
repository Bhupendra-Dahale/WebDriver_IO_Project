Feature: Interating with web elements

    @web
    Scenario Outline: web elements
        Given WebPage page is opened
        When we interact with elements
    Examples:
        | Test_ID        |
        | demo_test_001  |