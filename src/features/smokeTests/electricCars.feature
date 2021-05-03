Feature: User should be able select electric cars

  Scenario: As a user, I go to home page and select electric cars

    Given I am on the home page
    When I cick on electric cars link
    Then I verify text element Volvo SUV is displayed
