import { ENGINE_METHOD_NONE } from "constants";

export class DataParser {
  public static getObjectFromJSON(filepath: string): Object {
    var data: any;
    var path = require("path");
    const fs = require("fs");

    const fileContents = fs.readFileSync(path.resolve("./") + filepath, "utf8");

    try {
      let data = JSON.parse(fileContents);
      // console.log("DataParser: data is: " + JSON.stringify(data))
      return data
    } catch (err) {
      throw new Error(err);
    }

  }
}
