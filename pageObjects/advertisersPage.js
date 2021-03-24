import { Selector } from 'testcafe';

export default class AdvertisersPage {
    constructor () {
        this.title = Selector('[data-testid="panel-header-title"]');
        this.newAdvertiserButton = Selector('[class="tw-button tw-button--primary"]');
        this.nameNewAdvertiser = Selector('[path="name"]');
        this.shortCodeNewAdvertiser = Selector('[path="code"]');
        this.urlNewAdvertiser = Selector('[path="backupLandingPageUrl"]');
        this.submitNewAdvertiser = Selector('[class="tw-button tw-button--primary"]');
        this.successToaster = Selector('[class="toaster success toaster--enter-exit-canvas"]');
    }
}