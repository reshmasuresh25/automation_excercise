export class BasePage {
  constructor(protected page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForSelector(selector: string, timeout = 10000) {
    await this.page.waitForSelector(selector, { timeout });
  }
}
