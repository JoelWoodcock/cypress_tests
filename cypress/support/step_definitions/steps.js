import { name, internet, phone } from 'faker';

Given('I open the appointments booking journey', () => {
  cy.visit('https://customer.bookingbug.com/?client=automation-appointments&environment=staging')
  cy.get('h1')
    .should('contain', 'Pick a service')
})

When('I select a service', () => {
  cy.get('button[translate="CARD.SELECT_BUTTON"]')
    .should('contain', 'Select')
    .click()
})

When('I select an available timeslot', () => {
  cy.get('h1')
    .should('contain', 'Select a date and time')

  cy.get('select')
  .first()
  .within(select => {
    cy.root().select(select.children()[1].value)
  })

  cy.get('button#navigation-next-button')
    .should('contain', 'Next')
    .click()
})

When('I input valid customer details', () => {
  cy.get('h1')
    .should('contain', 'Other information')

  cy.get('input#firstName')
    .type(person.firstName)
    .should('have.value', person.firstName)

  cy.get('input#lastName')
    .type(person.lastName)
    .should('have.value', person.lastName)
    
  cy.get('input#email')
    .type(person.email)
    .should('have.value', person.email)

  cy.get('input#mobile')
    .type(person.mobile)

  cy.get('.bb-checkbox__check-mark')
    .click()

  cy.get('button#navigation-next-button')
  .should('contain', 'Next')
  .click()
})

When('I confirm the booking', () => {
  cy.get('h1')
    .should('contain', 'Review booking')
    
  cy.get('button')
    .first()
    .should('contain', 'Confirm')
    .click()
})

Then('the appointment booking is complete', () => {
  cy.get('h1')
    .should('contain', 'Thanks, ' + person.firstName + '! Your booking has been confirmed')
})

var person = {
  firstName: name.firstName(),
  lastName : name.lastName(),
  email    : internet.email(),
  mobile   : phone.phoneNumber('77########')
}