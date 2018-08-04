import { Selector } from 'testcafe';
import { AngularSelector, waitForAngular } from 'testcafe-angular-selectors';

fixture `Ionic-app-skeleton App Tests`
    .page `http://localhost:8100/`
    .beforeEach(async t => {
       await waitForAngular();
     });
test('IsRunning Test', async t => {
    await t
        .expect(AngularSelector('ion-navbar').innerText).contains('Sample Application User Page');
});
