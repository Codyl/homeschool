# Adding tests
The objective of this project is to:
* research test driven development
* utilize unit tests 
* keep tests separate from other kinds of tests
* use best practices from Clean Code

## Research
### Testing Purpose
Dirty tests are worse than no tests due to increase in maintainance time 
### Types
* Unit Testing - testing the smallest part of a code that can be logically isolated such as a function prop or component
* Smoke Testing - Verifies the most crucial functions of a system but does not dive into the finer details
* Integration Testing - Verifies modules work when combined
* System Testing/End to end - Verifies entire system of modules work together
* Regression Testing - Verfies that a test does not fail after it is made
* Performance and Load Testing - Verify speed and reliability under normal and abnormal conditions
* UAT - User does the testing

### Purposes
* Functionality
* Usability
* Compatability
* Security
* Performance
* Database
* Interface
* Production
### Process
* Write the minimal amount for a compiling failing unit test
* Pass the unit test
### Best Practices
* Keep code flexable, maintainable(readable), and reuseable
* Dont overexpose details
* Build Operate Check Pattern
* Test a single Concept not nessisarily a single assert
* Fast, Independant, Repeatable, Self-validating, Timely