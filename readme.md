# Random Quote Generator (Vanilla JavaScript)

## Overview

The **Random Quote Generator** is a lightweight frontend web application built using **HTML, CSS, and Vanilla JavaScript**.  
The application fetches a random quote from a public REST API and displays it in a clean, minimal user interface.

This project demonstrates core frontend development concepts such as **asynchronous API fetching**, **DOM manipulation**, **event handling**, **UI state management**, and **error handling**, making it suitable as a **minor project**, **college submission**, or **beginner portfolio project**.

---

## Live Demo

The application is deployed on **Vercel** and can be accessed using the deployed URL: https://random-quote-generator-nine-cyan.vercel.app/


---

## Features

- Fetches a random quote automatically on page load
- Generate a new quote using a button click
- Copy quote and author to clipboard
- Loading state handling during API calls
- Graceful error handling if API fails
- Clean, light-themed user interface
- Responsive layout for different screen sizes

---

## Technology Stack

- **HTML5**  
  Used to define the structure of the web application.

- **CSS3**  
  Used to style the application with a clean and minimal design.

- **Vanilla JavaScript (ES6+)**  
  Handles application logic, API communication, and DOM updates.

- **Fetch API**  
  Used to retrieve data asynchronously from a public REST API.

- **Git & GitHub**  
  Used for version control and source code hosting.

- **Vercel**  
  Used to deploy and host the static frontend application.

---

## API Used

This project uses a **public quotes API** that does not require authentication.

### DummyJSON Quotes API

- **Endpoint:** https://dummyjson.com/quotes/random

---

 ## How It Works (End-to-End Flow)

- When the page loads, the fetchQuote() function is executed automatically.

- JavaScript sends a GET request to the public quotes API using the Fetch API.

- The API returns a JSON response containing a quote and author.

- The quote content and author name are extracted from the response.

- The DOM is updated dynamically to display the quote.

- During the fetch operation, action buttons are disabled to indicate loading.

- If the API request fails, a fallback error message is displayed.


---

## Project Structure
```bash
Random-Quote-Generator/
│
├── index.html
│   - Contains the HTML structure of the application
│   - Includes quote container, buttons, and footer
│
├── style.css
│   - Handles styling, layout, and responsiveness
│   - Uses a light and minimal color scheme
│
├── script.js
│   - Contains all JavaScript logic
│   - Fetches quotes from the API
│   - Updates the DOM dynamically
│   - Handles loading and error states
 ```

