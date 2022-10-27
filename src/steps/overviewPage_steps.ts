import { Overview } from '../framework/pages/overviewLibre';
import { ReadData } from '../framework/utilities/readData';
import { Assertions } from '../utilities/assertion/assertions';
import clm from 'country-locale-map';
import ISO6391 from 'iso-639-1';


export let objOverview = new Overview()
let input: string | any[] = []

Given ("I am on the LibreView Patients overview page",() =>
{
   objOverview.navigateToLibreOverviewPage()
})

When ("I select the country from input {string} {int}",async (filepath:string ,rowNumber :number) =>
{
   input = ReadData.readdatafromcsv(filepath)
   await objOverview.selectLanguageCountry()
   if (input.length > 0) {
       objOverview.selectCountryFromDropDown(input[rowNumber-1]["country"]) 
   }
   else{
      throw Error("No input provided.")
   }

})

When ('I select the language from input {string} {int}',async (filepath:string ,rowNumber :number) =>
{
   input = ReadData.readdatafromcsv(filepath)
   await objOverview.selectLanguageCountry()
   if (input.length > 0) {
       objOverview.selectLanguageFromDropDown(input[rowNumber-1]["language"])  
   }
   else{
      throw Error("No input provided.")
   }

})

When ("I submit the selection",()=>{
   objOverview.clickOnSubmit()
})

Then('I see the header with the {int} selected',async (rowNumber :number) =>{
  let countryCode = clm.getAlpha2ByName(input[rowNumber-1]["country"])
  let nativeLanguage = ISO6391.getNativeName(input[rowNumber-1]["language"])
  await Assertions.verifyText(objOverview.languageChange,countryCode)
  await Assertions.verifyText(objOverview.languageChange,nativeLanguage)
})

Then ("I check the header {string} {string} based on {int} selected",
   async (label1:string,label2:string,rowNumber:number) =>
{
   await objOverview.verifylabelpresent(label1,label2,input[rowNumber-1]["country"])
})

Then("I cannot submit the selection",() =>{
   Assertions.verifyElement(objOverview.countrymodal)
})