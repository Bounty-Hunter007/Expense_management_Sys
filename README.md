# Expenza
## Expense Management System

This is a web application to manage personal expenses. It allows users to signup, login, add expenses, view expense reports, and edit or delete expenses.

## Features

- User signup and login
- Add expenses with category, amount and date
- View summary of expenses with total amount spent
- Edit and delete existing expenses
- Responsive design

## Code Structure

The codebase consists of:

**HTML Pages**

- `index.html` - Homepage 
- `signup.html` - User signup page
- `login.html` - User login page  
- `dashboard.html` - Expenses dashboard page

**CSS Stylesheets**

- `style.css` - Styling for all pages like colors, fonts, animations etc
- `responsive.css` - Media queries for responsiveness

**JavaScript**

- `script.js`
  - Functions for signup, login, add expense, edit expense etc
  - LocalStorage for data persistence
  - DOM manipulation for dynamic UI

**Assets** 

- `img/` - Contains icon and background images

## Functionality

The core functionality includes:

- `signup()` - Validate form and store user info in LocalStorage
- `login()` - Validate credentials and authenticate user 
- `addExpense()` - Add new expense entry to DOM and LocalStorage
- `editExpense()` - Update expense in DOM and LocalStorage
- `deleteExpense()` - Remove expense from DOM and LocalStorage

Input validation and UI updates via DOM manipulation.

## Usage

To run the app:

1. Open `index.html` in a browser
2. Signup a new account or login
3. Click 'Add Expense' on dashboard
4. Fill in category, amount and date  
5. Expenses will be listed with total calculated
6. Edit or delete expenses using action buttons

The expenses data is stored in LocalStorage so will persist between sessions. 

Signup, login and add forms have validation for empty fields. 

Responsive design provides optimal experience across mobile, tablet and desktop screens.

## Customization

The app can be customized easily by modifying the HTML, CSS and JS files.

Some easy customizations include:

- Add more expense categories
- Change color scheme 
- Add charts to dashboard
- Animate UI elements
- Implement server backend

The code is well-commented to help understand and modify it for your own use case.

