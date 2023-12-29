
import * as fs from 'fs';

const path = require('path')

export class BetFileService {
  writeJsonToFile(jsonObject: Record<string, any>): void {
    const jsonString = JSON.stringify(jsonObject, null, 2);
    const currentModuleDirectory = __dirname;
    const parentDirectory = path.resolve(currentModuleDirectory, '..');
    let filePath = path.join(parentDirectory, 'bet.config.ts');
    fs.writeFileSync(filePath, jsonString);
  }
}
