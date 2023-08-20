@hrm
Feature: Employee Registration

    Scenario Outline: <Test_ID> : Login to OrangeHRM page
        Given  Login to OrangeHRM <URL>
        When  Go to the Add Employee section
        And Fill the Initial Details <FirstName> <MiddleName> <LastName>
        And Fill the Personal Details <Nationality> <Marital_status> <Year> <Month> <Date> <Gender>
        Then User must be visible in the List <FirstName> <LastName>

        Examples:
            | Test_ID      | URL                                                                | FirstName | MiddleName | LastName | Nationality | Marital_status | Year | Month   | Date | Gender |
            | HRM_Login_01 | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | Mayur     | Nitin      |  Ramteke | Indian      | Single         | 1999 | January | 23   | Female |