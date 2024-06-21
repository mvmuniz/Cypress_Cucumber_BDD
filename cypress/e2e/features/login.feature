Feature: Login
  As a user
  I want to log into my account
  So that I can access my personalized content

  Scenario: Valid Login
    Given I'm on the login page
    When I enter my registered email and password
    And I click the login button
    Then I should be logged into my account successfully