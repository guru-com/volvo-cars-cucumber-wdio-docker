Feature: User should be able to select hybrid cars

  Scenario: As a user, I go to home page and select hybrid cars

    Given I am on the home page
    When I verify element cars on home page
    When I verify screen for hybrid cars
    Then I verify element Volvo sedan for selected cars type