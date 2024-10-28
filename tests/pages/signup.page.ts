import { BasePage } from './base.page';

export class SignupPage extends BasePage {
  async fillSignupForm(user: any) {
    await this.page.check('#id_gender1');
    await this.page.fill('#password', user.password);

    await this.page.selectOption('#days', '1');
    await this.page.selectOption('#months', '1');
    await this.page.selectOption('#years', '1990');

    await this.page.fill('#first_name', user.first_name);
    await this.page.fill('#last_name', user.last_name);
    await this.page.fill('#company', 'Straiv');
    await this.page.fill('#address1', '123 Main St');
    await this.page.fill('#address2', 'Apt 4B');
    await this.page.selectOption('#country', 'India');
    await this.page.fill('#state', 'State');
    await this.page.fill('#city', 'City');
    await this.page.fill('#zipcode', '123456');
    await this.page.fill('#mobile_number', '9876543210');

    // Check the checkboxes
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async submitSignup() {
    await this.page.click('[data-qa="create-account"]');
  }

  async verifyAccountCreatedAndContinue() {
    await this.page.waitForSelector('[data-qa="account-created"]', { state: 'visible' });

    // Click the "Continue" button without waiting for navigation
    await this.page.click('[data-qa="continue-button"]');
    await this.page.waitForSelector('.fa-user'); // Ensure the user is logged in
  }
}
