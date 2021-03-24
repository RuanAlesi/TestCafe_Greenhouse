import LoginPage from '../pageObjects/loginPage';
import HomePage from '../pageObjects/homePage'

const loginPage = new LoginPage();
const homePage = new HomePage();

const email = 'alesi.ruan@gmail.com';
const password = '@Wpp2021';

fixture `These tests check the actions on login page`
            .page `https://manage-test.lemonpi.io/r/login`;

test('Sucessful login', async t => {
    await t
        .typeText(loginPage.emailInput, email, { paste: true} )
        .typeText(loginPage.passWordInput, password, { paste: true})
        .click(loginPage.submitButton)
        .expect(homePage.title.textContent).contains('Quality Assurance Agency');
});

test('Failed login', async t => {
    await t
        .typeText(loginPage.emailInput, 'wrong@email.com' )
        .typeText(loginPage.passWordInput, password, { paste: true})
        .click(loginPage.submitButton)
        .expect(loginPage.errorMessage.textContent).contains('Invalid email/password combination.');
});

