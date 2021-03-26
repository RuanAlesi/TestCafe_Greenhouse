import {Role} from 'testcafe';
import homePage from '../pageObjects/homePage';
import loginPage from '../pageObjects/loginPage';

const credentialSet = require('../lib/credentials.json');

const url = credentialSet[0].url;
const myEmail = credentialSet[0].email;
const myPassword = credentialSet[0].password;


export const userRole = Role(url, async t => {
    await t
        .typeText(loginPage.emailInput, myEmail, { paste: true})
        .typeText(loginPage.passWordInput, myPassword, { paste: true})
        .click(loginPage.submitButton)
        .click(homePage.closeTipFrame)
}, {
    preserveUrl: true
});