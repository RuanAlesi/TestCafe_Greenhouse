import { Selector } from 'testcafe';

export default class HomePage {
    constructor () {
        this.title = Selector('[data-testid="page-header-title"]');
        this.menuAdvertisers = Selector('[data-testid="Advertisers"]');
        this.closeTipFrame = Selector('[class="modal__close-button material-icons"]');
    }
}