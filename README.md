Here’s the `README.md` content ready for you to copy and paste:

---

# Automation Exercise

This project leverages [Playwright](https://playwright.dev/) for automating tests on user signup and login functionalities within a sample e-commerce environment. It follows a modular approach with page object models, making the codebase more maintainable and reusable.

## Prerequisites

Ensure **Node.js** and **npm** are installed:

```bash
node -v    # should be >= v14
npm -v     # should be >= v6
```

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/reshmasuresh25/automation_excercise.git
   cd automation_excercise
   ```

2. **Install Playwright and Project Dependencies:**

   ```bash
   npx playwright install
   npm install
   ```

## Running Tests

Execute all tests with:

```bash
npx playwright test
```

## Project Structure

- **tests/**: Test scripts for signup and login processes.
- **helpers/**: Contains utility functions like `generateUser`, which creates randomized user data.
- **pages/**: Page Object Model (POM) files such as `HomePage`, `AuthPage`, and `SignupPage`, designed to structure page interactions.

## Key Features

- **Dynamic User Data**: `generateUser` function generates unique user data, including randomized emails, for testing purposes.
- **Modular Page Object Models**: Organized page interactions to promote code reuse and readability.
- **Automated Tests for Signup & Login**: Validates the full signup and login workflows, including user verification.

## Usage

After setting up, navigate to the root directory and run the following command to execute all tests:

```bash
npx playwright test
```

## Additional Resources

For more information, visit the official [Playwright documentation](https://playwright.dev/docs/intro).

--- 

This is ready to paste directly into your `README.md` file!
