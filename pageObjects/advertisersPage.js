import {Selector} from 'testcafe';

class AdvertisersPage {
    constructor () {
        this.title = Selector('[data-testid="panel-header-title"]');
        this.newAdvertiserButton = Selector('[class="tw-button tw-button--primary"]');

        this.newAdvertiserFrame = Selector('.off-canvas__title h3');
        this.nameNewAdvertiser = Selector('[path="name"]');
        this.shortCodeNewAdvertiser = Selector('[path="code"]');
        this.urlNewAdvertiser = Selector('[path="backupLandingPageUrl"]');
        this.submitNewAdvertiser = Selector('[class="tw-button tw-button--primary"]');

        this.successToaster = Selector('div.items-center div');
    }
}

export default new AdvertisersPage();

