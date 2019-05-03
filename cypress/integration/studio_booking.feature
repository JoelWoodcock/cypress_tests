Feature: Studio booking end to end

  Background:
    Given I am logged in to studio

  Scenario: Make a booking via the studio booking journey
    Given I am on the calendar page of studio
    When I click the "New Booking" button
    And the booking modal is open
    And I click the "Continue" button
    And the date and time page is open
    And I select an available timeslot and click Continue
    And the select attendees page is open
    And I input new customer details and click Continue
    Then the booking is confirmed
    And I can see the booking in classic