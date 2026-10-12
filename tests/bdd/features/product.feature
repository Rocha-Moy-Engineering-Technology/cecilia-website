Feature: Cecilia product website
  # Acceptance criteria in SDOC FEATURE_SPECS A1.1-A1.5.

  Scenario Outline: CECILIA-WEB-BDD-001 visitors understand the app and join the beta
    Given I open the product page in "<locale>"
    Then the cycle features and example screens are available
    And every beta button opens Cecilia's TestFlight invitation
    When I open the first frequently asked question
    Then its answer is visible
    When I follow the features navigation link
    Then I reach the features section
    Examples:
      | locale |
      | en     |
      | es     |
      | pt     |

  Scenario: CECILIA-WEB-BDD-002 visitors can explicitly choose another language
    Given I open the product page in "en"
    When I select Português
    Then the Portuguese product page is displayed
