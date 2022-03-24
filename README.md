# ATM

## Description 
ATM Deposit and Cashback Application

## Purpose 
This was done as an assignment in the MIT course - Full Stack Development with Mern

---------

## Technologies Used 
- HTML
- Javascript
- CSS

---------

## Installation 
- Clone this repository to your local machine
- Open a command line on your computer and run the command cd path-to-project-root (this should be the actual directory where the repository is located on your local machine)
- Within the same command-line window, run npm install http-server which will allow you to fire up a web server to access the paage
- Once the command completes successfully, run http-server -c-1
- Open your browser of choice and browse to http://127.0.0.1:8080/

## How to Run 
- When the page is loaded in your browser, choose an option from the dropdown
- The submit button isn't enabled until there is a valid value (ie a nummber to deposit, or a number not greater than the balance to withdrawal)
- When depositing, upon clicking submit, it will add to your balance
-  When withdrawing (Cash Back), upon clicking submit, it will subtract from your balance

---------

## Files 
- **/index.html** - Start-up file to be opened by browser
- **/ATM.jsx** - Build Form and code for deposit/withdrawal (Render ReactDOM)
- **/style.css** -  Stylesheet file that positions objects, controls text, colors, and layout

---------

## Improvements Made
- 2022-03-24: Changed Buttons to a Drop-Down Select
- 2022-03-24: Added disabling of button if invalid amount
- 2022-03-24: Added check to not allow a withdrawal if amount greater than balance
- 2022-03-24: Added Current Transaction Information with a warning if withdrawal attempt amount is greater than balance

---------

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[The MIT License (MIT)](https://github.com/slumpbuster/Formik/blob/main/LICENSE)
