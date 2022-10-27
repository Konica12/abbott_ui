import { assert } from "chai";

const { I } = inject();
export class Assertions {
 
  static verifyFields(Field: string) {
    I.see(Field)
  }

  static async verifyText(locator: string, data: any) {
    let dataPresent = await I.grabTextFrom(locator)
    assert.include(dataPresent, data, "notFound")
  }

  static verifyElement(element: string) {
    I.seeElement(element)
  }

  static async verifyNotEmpty(data: any) {
    let value = await I.grabTextFrom(data)
    assert.isNotEmpty(value)
  }

 

  }
