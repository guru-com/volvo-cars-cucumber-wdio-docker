Feature: User should be able to select mild hybrid cars

  Scenario: As a user, I go to home page and select mild hybrid cars

    Given I am on the home page
    When I verify element cars on home page
    When I verify screen for mild hybrid cars
    Then I verify element Volvo estate for selected cars type