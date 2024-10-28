import { BasePage } from './base.page';

export class HomePage extends BasePage {
  async handleCookieConsent() {
    const consentButton = this.page.locator('.fc-button.fc-cta-consent.fc-primary-button');
    if (await consentButton.isVisible({ timeout: 2000 })) {
      await consentButton.click();
    }
  }

  async clickSignupLogin() {
    await this.page.click('text=Signup / Login');
  }

  async fillSignupForm(name: string, email: string) {
    await this.page.fill('[data-qa="signup-name"]', name);
    await this.page.fill('[data-qa="signup-email"]', email);

    // Click the signup button to submit the form
    await this.page.click('[data-qa="signup-button"]');
  }
}
