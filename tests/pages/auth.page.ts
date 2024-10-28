import { BasePage } from './base.page';

export class AuthPage extends BasePage {
  async fillLoginForm(email: string, password: string) {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
  }

  async submitLogin() {
    await this.page.click('[data-qa="login-button"]');
  }

  async waitAndLogout() {
    // Wait for a few seconds (e.g., 3 seconds)
    await this.page.waitForTimeout(3000);

    // Click on the Logout button
    await this.page.click('a[href="/logout"]');

    // Wait for navigation to complete after logout
    await this.page.waitForNavigation({ waitUntil: 'networkidle' });
  }

  async verifyLoggedInAs(username: string) {
    // Wait for the 'Logged in as' message to appear in the navigation
    await this.page.waitForSelector('.fa-user');

    // Retrieve the text content
    const loggedInText = await this.page.locator('a:has(i.fa-user)').textContent();
    console.log(`Logged in text: ${loggedInText}`);
    // Verify the username is displayed in the navigation
    if (!loggedInText || !loggedInText.includes(`Logged in as ${username}`)) {
      throw new Error(`Expected to see "Logged in as ${username}", but got: ${loggedInText}`);
    }
  }
}
