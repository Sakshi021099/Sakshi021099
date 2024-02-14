Feature: Perform Various function on calculator

Background:
    Given I visit the website


    Scenario: Addtition of two positive values
         When I select first numbers for add operation
         When I click on add operator 
         When I select second number for add operation
         When I select equal button for sum of two number
         Then I can see the result of sum

    Scenario: Addtition of two negative values    
         When I select first negative numbers for addition operation
         When I click on addition operator 
         When I select second negative number for addition operation
         When I select equal button for addition of two negative number
         Then I can see the result of sum of two negative numbers

    Scenario: Addtition of one negative values    
         When I select first negative values for addition operation
         When I click on sum operator 
         When I select second positive number for addition operation
         When I select equal button for addition of one negative number
         Then I can see the result of sum of one negative numbers

    Scenario: Subtraction of values
         When I select first numbers for Sub. operation
         When I click on Sub. operator 
         When I select second number for Sub. operation
         When I select equal button for difference of two number
         Then I can see the result of sub.

    Scenario: Subtraction of two negative values
         When I select first negative numbers for Subtraction operation
         When I click on Subtraction operator 
         When I select second negative number for Subtraction operation
         When I select equal button for difference of two negative number
         Then I can see the result of Subtraction of two negative number

    Scenario: Subtraction of one negative values    
         When I select first negative values for Subtraction operation
         When I click on Sub operator 
         When I select second positive number for Subtraction operation
         When I select equal button for Subtraction of one negative number
         Then I can see the result of Subtraction of one negative numbers

    Scenario: Mulltiplication of values    
         When I select first numbers for Mulltiplication operation
         When I click on Mulltiplication operator 
         When I select second number for Mulltiplication operation
         When I select equal button for Mulltiplication of two number
         Then I can see the result of Mulltiplication

    Scenario: Mulltiplication of two negative values
         When I select first negative numbers for Mulltiplication operation
         When I click on product operator 
         When I select second negative number for Mulltiplication operation
         When I select equal button for Mulltiplication of two negative number
         Then I can see the result of product of two negative number

    Scenario: Mulltiplication of one negative values    
         When I select first negative values for Mulltiplication operation
         When I click on multi operator 
         When I select second positive number for Mulltiplication operation
         When I select equal button for Mulltiplication of one negative number
         Then I can see the result of Mulltiplication of one negative numbers

    Scenario: Division of values    
         When I select first numbers for Division operation
         When I click on Division operator 
         When I select second number for Division operation
         When I select equal button for Division of two number
         Then I can see the result of Division

    Scenario: Division by 0    
         When I select first numbers for Division operation
         When I click on Divide operator 
         When I select 0 for Division operation
         When I select equal button for Division of two number
         Then I can see the result of Divide

    
    Scenario: Divided by 0
         When I select 0 as first numbers for Division operation
         When I click on modulo operator 
         When I select another number for Division operation
         When I select equal button for Division with 0 number
         Then I can see the result of modulo

    Scenario: Resultant when apply all operators (+,-,*,%)
         When I select 4 as first numbers 
         When I click on + operator 
         When I select 4 as another number
         When I click on - operator 
         When I select 5 as third number
         When I click on *  operator 
         When I select 4 as fourth number
         When I click on %  operator 
         When I select 20 as fifth number
         When I select equal button for result
         Then I can see the calculation result    

    Scenario: Resultant when all operator is selected
         When I select sum operator
         When I select sub operator 
         When I select product operator
         When I select divide operator
         When I can see the resultant of all operator calculation
         Then I can see the resultant of all operators

    Scenario: Clear resultant by clicking on MC button
         When I select first numbers for sum operation
         When I click on summation operator 
         When I select another number for sum operation
         When I select equal button for sum
         When I can see the result of calculation
         Then I click on MC button 

