Feature: To validate the login functionality of facebook application

Scenario: To validate the login functionality with Invalid credentials.

Given The user should be in facebook login page
When The user has to fill username and password
And The user has to click login button
Then The user should get error message