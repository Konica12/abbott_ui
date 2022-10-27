import fs from "fs";
import { parse } from "csv-parse/sync";

export class ReadData {

  static readdatafromcsv(filepath:string)
  {
     let data = fs.readFileSync(filepath, "utf8");
     const tenantObject = parse(data, { columns: true });
     return tenantObject
    
  }  
}