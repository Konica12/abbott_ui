import { assert } from "chai";
import ISO6391 from 'iso-639-1';

//import { expect } from 'chai';
const { I } = inject();

export class Overview {
  libreViewHeader = '//*[@id="LV-logo"]';
  marketingLinks = '//*[@id="marketingLinks"]';
  languageChange = '//*[@id="languageSelectWrapperHomeHeader"]';
  countryDropDown = '//*[@id="countryDropdownBtn"]';
  languageDropDown = '//*[@id="languageDropdownBtn"]';
  submitButton = '//*[@id="modalSubmit"]';
  patHeaderLink = '//*[@id="patHeaderLink"]';
  proHeaderLink = '//*[@id="proHeaderLink"]';
  modalclose = '//*[@id="modalClose"]';
  countrymodal = "#countryModal > div > div";

  verifyLibreOverview() {
    I.waitForElement(this.libreViewHeader);
    I.waitForElement(this.marketingLinks);
  }

  navigateToLibreOverviewPage() {
    I.amOnPage("/");
  }

  async selectLanguageCountry() {
    let ismodalopen = await I.grabNumberOfVisibleElements(this.countryDropDown);
    if (ismodalopen > 0) {
      console.log("Modal is already open. Moving ahead !!");
    } else I.click(this.languageChange);
  }

  selectCountryFromDropDown(countryName: string) {
    I.waitForElement(this.countryDropDown);
    I.click(this.countryDropDown);
    I.scrollIntoView(
      `//*[@id="countryDropdown"]/li/a[contains(text(),'${countryName}')]`,true);
    I.click(
      `//*[@id="countryDropdown"]/li/a[contains(text(),'${countryName}')]//parent::li`
    );
  }

  selectLanguageFromDropDown(language: string) {
    I.waitForElement(this.languageDropDown);
    I.click(this.languageDropDown);
    let locale = ISO6391.getCode(language)
    I.scrollIntoView(`//*[@id="languageDropdown"]/li/a[@value ='${locale}']`,true)
    I.click(
      `//*[@id="languageDropdown"]/li/a[@value ='${locale}']//parent::li`
    );
  }

  clickOnSubmit() {
    I.click(this.submitButton);
  }

  async verifylabelpresent(label1: string, label2: string, country: string) {
    if (!country.includes("France")) {
      let patientLink = await I.grabTextFrom(this.patHeaderLink);
      let proLink = await I.grabTextFrom(this.proHeaderLink);
      assert.strictEqual(patientLink, label1, "Patient Link is not present");
      assert.strictEqual(proLink, label2, "Professional Link not present");
    } else {
      I.dontSeeElement(this.patHeaderLink);
      I.dontSeeElement(this.proHeaderLink);
    }
  }

  closelanguageModal() {
    I.click(this.modalclose);
  }
}
