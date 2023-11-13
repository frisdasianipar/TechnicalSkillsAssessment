describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //1a.login
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        //1b.logout
        cy.get('.oxd-userdropdown-tab').click()
        cy.wait(500)
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

        //Apply Leave
        cy.get(':nth-child(3) > .oxd-main-menu-item').click({multiple:true, force:true})
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(1)').click({multiple:true, force:true})
        cy.wait(500)
        cy.get('.oxd-select-text').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click({multiple:true, force:true})
        cy.get('.oxd-textarea').type("Leave saja")

        //3.Cancel Leave
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click({multiple:true, force:true})
        cy.wait(500)
        cy.get('.oxd-table-cell-actions > .oxd-button').click()

        //Update personal details
        cy.get(':nth-child(6) > .oxd-main-menu-item').click({multiple:true, force:true})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click({multiple:true, force:true})
        cy.wait(500)
        cy.log(cy.get('.oxd-date-input-calendar'))
        cy.get('.oxd-date-input-calendar :nth-child(9) .oxd-calendar-date').click({multiple:true, force:true})
        
        cy.wait(500)
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Paul").clear()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Frisda Sianipar")
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({multiple:true, force:true})
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click({multiple:true, force:true})


        //Update contact details
        cy.get(':nth-child(2) > .orangehrm-tabs-item').click({multiple:true, force:true})
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jalan KH Ramli")
        cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Jakarta Selatan")
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("082167906144")
        cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("paul1@osohrm.com").clear()
        cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("frisdasianipar123@gmail.com")
        cy.get('.oxd-form-actions > .oxd-button').click()

        //Add job title
        cy.get(':nth-child(1) > .oxd-main-menu-item').click({multiple:true, force:true})
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click({multiple:true, force:true})
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click({multiple:true, force:true})
        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-input').type("Quality Assurance")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type("Ensure the application ready to publish")
        cy.get('.oxd-button--secondary').click()
    })
})