Feature: User should be able to select hybrid cars

  Scenario: As a user, I go to home page and select hybrid cars

    Given I am on the home page
    When I save element cars on home page
    When I save screen for hybrid cars
    Then I save element Volvo sedan for selected cars type