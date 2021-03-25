import homePage from '../pageObjects/homePage';
import advertisersPage from '../pageObjects/advertisersPage';

import {roleUser} from '../lib/LoginRole'

const ramdomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

fixture `These tests check the actions on Advertisers page`;

test('Create a new advertiser', async t => {
    await t
        .useRole(roleUser)

    await t
        .click(homePage.menuAdvertisers)
        .click(advertisersPage.newAdvertiserButton)
        .typeText(advertisersPage.nameNewAdvertiser, ramdomString, { paste: true})
        .typeText(advertisersPage.shortCodeNewAdvertiser, ramdomString.substring(1, 3), { paste: true})
        .typeText(advertisersPage.urlNewAdvertiser, 'http://' + ramdomString + '.com', { paste: true})
        .click(advertisersPage.submitNewAdvertiser);

    await t
        .wait(2000)
        .expect(advertisersPage.successToaster.textContent)
        .eql("Successfully created advertiser");

});