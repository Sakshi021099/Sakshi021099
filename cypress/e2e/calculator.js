import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let overrideEnabled = false;

Given("override is enabled", () => {
    overrideEnabled = true;
});

Given("I visit the website", () => {
    cy.visit('http://localhost:3000/')
    cy.get('[class="grid w-full grid-cols-4 gap-12 px-12 py-12"]').should('exist')
    cy.wait(500)

});

When ("I select first numbers for add operation", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on add operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select second number for add operation", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for sum of two number", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of sum", () => {
    cy.get('[class="text-3xl font-bold"]').should('contain', '13')
})



When ("I select first negative numbers for addition operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on addition operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select second negative number for addition operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I select equal button for addition of two negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of sum of two negative numbers", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '-13')
})



When ("I select first negative values for addition operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on sum operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select second positive number for addition operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for addition of one negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of sum of one negative numbers", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '-3')
})



When ("I select first numbers for Sub. operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on Sub. operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(14).click()
});

When ("I select second number for Sub. operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for difference of two number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of sub.", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '3')
})


When ("I select first negative numbers for Subtraction operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on Subtraction operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(14).click()
});

When ("I select second negative number for Subtraction operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I select equal button for difference of two negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Subtraction of two negative number", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '-3')
})



When ("I select first negative values for Subtraction operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on Sub operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(14).click()
});

When ("I select second positive number for Subtraction operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for Subtraction of one negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Subtraction of one negative numbers", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '-13')
})



When ("I select first numbers for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on Mulltiplication operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(15).click()
});

When ("I select second number for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for Mulltiplication of two number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Mulltiplication", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '40')
})


When ("I select first negative numbers for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on product operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(15).click()
});

When ("I select second negative number for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I select equal button for Mulltiplication of two negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of product of two negative number", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '40')
})



When ("I select first negative values for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(12).click()
});

When ("I click on multi operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(15).click()
});

When ("I select second positive number for Mulltiplication operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for Mulltiplication of one negative number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Mulltiplication of one negative numbers", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '-40')
})



When ("I select first numbers for Division operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on Division operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(16).click()
});

When ("I select second number for Division operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for Division of two number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Division", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '1.6')
})


When ("I select first numbers for Divide operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on Divide operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(16).click()
});

When ("I select 0 for Division operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(9).click()
});

When ("I select equal button for Divide of two number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of Divide", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', 'Infinity')
})


When ("I select 0 as first numbers for Division operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(9).click()
});

When ("I click on modulo operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(16).click()
});

When ("I select another number for Division operation", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I select equal button for Division with 0 number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the result of modulo", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '0')
})


When ("I select 4 as first numbers", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(3).click()
});

When ("I click on + operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select 4 as another number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(3).click()
});

When ("I click on - operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(14).click()
});

When ("I select 5 as third number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I click on *  operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(15).click()
});

When ("I select 4 as fourth number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(3).click()
});

When ("I click on %  operator", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(16).click()
});

When ("I select 20 as fifth number", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(1).click()
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(9).click()
});

When ("I select equal button for result", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the calculation result", ()=>{
    cy.get('[class="text-3xl font-bold"]').should('contain', '7')
})



When ("I select sum operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select sub operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(14).click()
});

When ("I select product operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(15).click()
});

When ("I select divide operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(16).click()
});

When ("I can see the resultant of all operator calculation", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

Then ("I can see the resultant of all operators", ()=>{
    cy.get('[class="py-1 text-xs text-red-500"]').should('contain', 'Invalid expression')
})



When ("I select first numbers for sum operation", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(7).click()
});

When ("I click on summation operator", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(13).click()
});

When ("I select another number for sum operation", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(4).click()
});

When ("I select equal button for sum", () => {
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(10).click()
});

When ("I can see the result of calculation", () => {
    cy.get('[class="text-3xl font-bold"]').should('contain', '13')
});

Then ("I click on MC button", ()=>{
    cy.get('[class="bg-gray-300 rounded border w-12 h-12 hover:bg-gray-400 hover:text-white active:text-white active:bg-gray-500"]').eq(11).click()
    cy.get('.h-24')
})






