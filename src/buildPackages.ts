import { generatePackage } from './generatePackage';
import { destinationFileNames } from './config';

(async () => {
  Promise.all(destinationFileNames.map(generatePackage));
})();
