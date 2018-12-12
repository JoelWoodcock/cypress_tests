Feature: Customer journey

  Scenario: Make a booking with the customer journey
    Given I open the appointments booking journey
    When I select a service
    And I select an available timeslot
    And I input valid customer details
    And I confirm the booking
    Then the appointment booking is complete
