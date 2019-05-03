Feature: Events journey end to end

  Scenario: Complete an event booking via the standard public journey
    Given I open the events booking journey
    When I select an event
    And I select tickets
    And I input valid customer details
    And I confirm the booking
    Then the event booking is complete