import loginPage from '../pageObjects/loginPage';

fixture `These tests check the actions on login page`
    .page `https://manage-test.lemonpi.io/r/login`;

test('Failed login', async t => {
    await t
        .typeText(loginPage.emailInput, 'wrong@email.com')
        .typeText(loginPage.passWordInput, 'wrongPassword');

    await t
        .click(loginPage.submitButton);

    await t
        .expect(loginPage.errorMessage.textContent)
        .eql('Invalid email/password combination.');
});