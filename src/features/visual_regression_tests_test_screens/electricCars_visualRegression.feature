Feature: User should be able select electric cars

  Scenario: As a user, I go to home page and select electric cars

    Given I am on the home page
    When I verify element cars on home page
    When I verify screen for electric cars
    Then I verify element Volvo SUV for selected cars type
