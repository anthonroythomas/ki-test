/// <reference types="cypress" />

describe('ki test', () => {

	before(() => {
    cy.visit('https://forms.gle/eiiqRfHiRAiCXgPX7')
  })


  it('navigates to the title page', () => {
   
    cy.get('div[role=heading][aria-level=1]').should('be.visible').should('have.text', 'Ki Mock Platform — Take Home Exercise')
  })


  it('can select create quote', () => {
   
    cy.contains('Create a new quote').click()
    .then(() => {
    cy.get('div[aria-label="Create a new quote"]').click()
	
		});
  })

  it('can navigate to the next page', () => {
   
    cy.contains('Next').click().then(() => {
    cy.get('div[role=heading][aria-level=3]').eq(0).should('be.visible').should('have.text', 'Primary Country *')
     });    
   })

  it('selects a country option', () => {
    cy.wait(500)
    cy.get('div[role="option"]').eq(0).click().then(() => {
    cy.wait(1000)
    cy.get('div[data-value="China"]').should('be.visible')
    })
    cy.get('div[data-value="China"]').eq(1).click().should('be.visible').should('have.text', 'China')
    cy.wait(1000)
  })

  it('selects an Insured option', () => {

    cy.get('div[role="option"]').eq(8).click().then(() => {

    cy.wait(1000)
    cy.get('div[data-value="Newco Ltd"]').should('be.visible') 
      })     
    cy.get('div[data-value="Newco Ltd"]').eq(1).click()
  })


  it('can select Class of Business', () => {
   
    cy.contains('Energy').click()
    .then(() => {
    cy.contains('Next').click()    
    }); 
  })

  it('can select inception date', () => {
   
    cy.get('input[type="date"]').type('2025-01-12')
  })

  it('can select an AUM value', () => {
   
    cy.get('input[type="text"]').eq(0).type('20000000')
  })

  it('can select an premium value', () => {
   
    cy.get('input[type="text"]').eq(1).type('300')
  })

  it('can navigate to the next page', () => {
   
    cy.contains('Next').click().then(() => {
    cy.wait(2000)
    cy.get('div[role=heading]').eq(1).should('be.visible').should('have.text', 'Success — Quote created')
      });        
  })

})
