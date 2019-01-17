export class DataParser {
  public static getObjectFromJSON(filepath: string): Object {
    var data: any;
    var path = require("path");
    const fs = require("fs");

    const fileContents = fs.readFileSync(path.resolve("./") + filepath, "utf8");

    try {
      const data = JSON.parse(fileContents);
    } catch (err) {
      console.error(err);
    }

    return data;
  }
}
