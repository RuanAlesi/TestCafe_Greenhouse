import LoginPage from '../pageObjects/loginPage';
import HomePage from '../pageObjects/homePage'
import AdvertisersPage from '../pageObjects/advertisersPage'
import { Selector } from 'testcafe';

const loginPage = new LoginPage();
const homePage = new HomePage();
const advertisersPage = new AdvertisersPage();

const ramdomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const email = 'alesi.ruan@gmail.com';
const password = '@Wpp2021';

fixture `These tests check the actions on Advertisers page`
            .page `https://manage-test.lemonpi.io/r/90`;

test('Create a new advertiser', async t => {
    await t
        .typeText(loginPage.emailInput, email, { paste: true} )
        .typeText(loginPage.passWordInput, password, { paste: true})
        .click(loginPage.submitButton)
        .click(homePage.closeTipFrame)
        .expect(homePage.title.textContent).contains('Quality Assurance Agency')
        .click(homePage.menuAdvertisers)
        .click(advertisersPage.newAdvertiserButton)
        .typeText(advertisersPage.nameNewAdvertiser, ramdomString, { paste: true})
        .typeText(advertisersPage.shortCodeNewAdvertiser, ramdomString.substring(1, 3), { paste: true})
        .typeText(advertisersPage.urlNewAdvertiser, 'http://' + ramdomString + '.com', { paste: true})
        .click(advertisersPage.submitNewAdvertiser);
    await t
        .wait(1000)
        .expect(advertisersPage.successToaster.exists).ok();

});