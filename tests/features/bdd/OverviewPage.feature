Feature: User is able to navigate to the LibreView Patients Overview page

    Background:
        Given I am on the LibreView Patients overview page
    
    
    Scenario Outline: When no country is selected language cannot be selected
        When I select the language from input "<file>" <Inputrow>
        And I submit the selection 
        Then I cannot submit the selection

        Examples:
            | file                               | Inputrow |
            | ./tests/features/data/testData.csv | 1        |
    
    Scenario Outline: When no language is selected country cannot be selected
        When I select the country from input "<file>" <Inputrow>
        And I submit the selection 
        Then I cannot submit the selection

        Examples:
            | file                               | Inputrow |
            | ./tests/features/data/testData.csv | 1        |
   
    Scenario Outline: User is able to view the headers on LibreView Main Page as per the selected Country and Language
        When I select the country from input "<file>" <Inputrow>
        And I select the language from input "<file>" <Inputrow>
        And I submit the selection 
        Then I see the header with the <Inputrow> selected
        And I check the header "Patients" "Professionals" based on <Inputrow> selected

        Examples:
            | file                               | Inputrow |
            | ./tests/features/data/testData.csv | 1        |
            | ./tests/features/data/testData.csv | 2        |

     @4         
    Scenario Outline: User is able to change the selected Country and Language and verify header
        When I select the country from input "<file>" <Inputrow>
        And I select the language from input "<file>" <Inputrow>
        And I submit the selection 
        And I see the header with the <Inputrow> selected
        And I check the header "Patients" "Professionals" based on <Inputrow> selected
        And I select the country from input "<file>" <changedInputrow>
        And I select the language from input "<file>" <changedInputrow>
        And I check the header "Patients" "Professionals" based on <changedInputrow> selected

        Examples:
            | file                               | Inputrow |changedInputrow|
            | ./tests/features/data/testData.csv | 1        |2              |







