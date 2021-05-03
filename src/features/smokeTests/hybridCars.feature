Feature: User should be able to select hybrid cars

  Scenario: As a user, I go to home page and select hybrid cars

    Given I am on the home page
    When I cick on hybrid cars link
    Then I verify text element Volvo sedan is displayed