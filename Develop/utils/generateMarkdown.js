// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return`![license badge](https://img.shields.io/badge/license-${license}-blue.svg)`
};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`
};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (license === "MIT") {
    return `this project is covered under the MIT license`
  } else{
    return ` `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
return `
# ${data.title}
  
  ${renderLicenseBadge(data.license)}

## Description
    
  ${data.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
  The following dependencies must be installed to use this application ${data.installation}
    
## Usage
  in order to use this app, ${data.usage}
    
## Credits
    
  ${data.credit}
    
## License
    
  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)} 

## How to Contribute
    
  ${data.contribution}
    
## Tests

  ${data.test}

## Questions

  if you have any additional questions contact me here:

  Github link:

  https://github.com/${data.username}

  Email address:

    ${data.email}

`;
    
}

module.exports = generateMarkdown;
