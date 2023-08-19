@demo_demo
Feature: Cucumber Demo
    I can have more info about the feature
    I can have more info about the feature
    I can have more info about the feature
    - Questions/clarification
    - known issues
    -Todo

    #this background step is like precondition and added as a first step to all scenatios listed
    Background: Launch google page
        Given Google page is opened

    Scenario: Scenarion Name
        When Search with WDIO
        Then Click on the first search result
        * URL should match with https://webdriver.io/

    Scenario: Scenarion Name
        When Search with webdriverio
        Then Click on the first search result
        * URL should match with https://webdriver.io/
    
    # Another Example
    # when we use let dataTable = data.hashes() this will return the array of the usernames
    # then we can use directly i.e. dataTable[0].UserName this well give abc
    Scenario: login to website
        Given: login with username and password
        |UserName|
        |abc     |
        |xyz     |
        Then: user must login successfully