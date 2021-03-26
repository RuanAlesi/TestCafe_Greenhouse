import homePage from '../pageObjects/homePage';
import advertisersPage from '../pageObjects/advertisersPage';

import {userRole} from '../lib/LoginRole'

const randomValue = Math.random().toString(10);

fixture `These tests check the actions on Advertisers page`;

test('Create a new advertiser', async t => {
    await t
        .useRole(userRole)
        .expect(homePage.title.exists)
        .ok();

    await t
        .click(homePage.menuAdvertisers)
        .click(advertisersPage.newAdvertiserButton)
        .expect(advertisersPage.newAdvertiserFrame.exists)
        .ok();

    await t
        .typeText(advertisersPage.nameNewAdvertiser, randomValue, { paste: true})
        .typeText(advertisersPage.shortCodeNewAdvertiser, randomValue.substring(1, 3), { paste: true})
        .typeText(advertisersPage.urlNewAdvertiser, 'http://' + randomValue + '.com', { paste: true})
        .click(advertisersPage.submitNewAdvertiser);

    await t
        .expect(advertisersPage.successToaster.textContent)
        .eql("Successfully created advertiser");

});