#! /usr/bin/env node
const args = process.argv.slice(2);

const appName = args[0];

console.log(`Hello, Creating react app with typescript ${appName}`);
var shell = require("shelljs");

shell.exec(`npx create-react-app ${appName} --template typescript`);

shell.cd(`${appName}`);
console.log("Installing fluentui");
shell.exec("npm i @fluentui/react");

const appDir = process.cwd();

console.log("Updating App.tsx");
const fs = require('fs');

const content = `import { FC } from 'react';
import { PrimaryButton } from '@fluentui/react';
import './App.css';

const App: FC<any> = ({ instance }) => {
return (
  <div>
    <PrimaryButton>Hello</PrimaryButton>
  </div>
)
}

export default App;
`;

fs.writeFile(`${appDir}/src/App.tsx`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
shell.cd(appDir + "/..");



