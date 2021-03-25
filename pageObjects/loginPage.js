import {Selector} from 'testcafe';

class LoginPage {
    constructor () {
        this.emailInput = Selector('[data-testid="email"]');
        this.passWordInput = Selector('[data-testid="password"]');
        this.submitButton = Selector('[data-testid="submit"]');
        this.errorMessage = Selector('[class="blockquote mt-4 mb-8 w-full px-2 py-4 blockquote--critical"]')
    }
}

export default new LoginPage();