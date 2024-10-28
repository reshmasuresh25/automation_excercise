import { test } from '@playwright/test';
import { generateUser } from '../helpers/user.helper';
import { HomePage } from './pages/home.page';
import { AuthPage } from './pages/auth.page';
import { SignupPage } from './pages/signup.page';
import { User } from '../helpers/user.helper';

test.describe('User Signup and Login', () => {
  let user: User;

  test.beforeAll(() => {
    user = generateUser();
  });

  test('User Signup', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);

    // Use relative URLs
    await homePage.goto('/');
    await homePage.handleCookieConsent();
    await homePage.clickSignupLogin();

    await homePage.fillSignupForm(`${user.first_name} ${user.last_name}`, user.email);
    await signupPage.fillSignupForm(user);
    await signupPage.submitSignup();
    await signupPage.verifyAccountCreatedAndContinue();

    // Optional: Verify the user is logged in after signup
    const authPage = new AuthPage(page);
    await authPage.verifyLoggedInAs(`${user.first_name} ${user.last_name}`);
  });

  test('User Login', async ({ page }) => {
    const homePage = new HomePage(page);
    const authPage = new AuthPage(page);

    // Use relative URL for login
    await homePage.goto('/login');
    await homePage.handleCookieConsent();
    await authPage.fillLoginForm('fixeduser@example.com', user.password);
    await authPage.submitLogin();

    // Verify that the user is logged in as the correct user
    await authPage.verifyLoggedInAs(`${user.first_name} ${user.last_name}`);
  });
});
