  Feature: Queuing journey end to end

  Scenario: Join a queue via the standard public journey
    Given I open the queuing journey
    When I select a service
    And I click to join the queue
    And I input valid customer details for queuers
    And I confirm it
    Then the client is added to the queue