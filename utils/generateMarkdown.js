// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache-2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'GPL-3.0') {
    return `[![License: GPL 3.0](https://img.shields.io/badge/License-GPL_3.0-brightgreen.svg)](https://opensource.org/licenses/gpl-3.0)`
  }

}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  }
  else if (license === 'MIT') { return `https://opensource.org/licenses/MIT` }
  else if (license === 'Apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPL-3.0') {
    return `https://opensource.org/licenses/gpl-3.0`
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license === 'None') {
    return ''
  }
  else {
    return `
  ## License
  Copyright &copy; 2021 ${name}<br/>   
  This project is licensed under the terms of the  <a href="${renderLicenseLink(license)}" target="_blank">${license}</a> license. 
  `
  }
}
//a function to make the license appear in the table of contents
function tc(license) {
  if (license === 'None') {
    return ''
  }
  else {
    return `
 * [License](#license)
  
  `
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title} by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
   ${tc(data.license)} 
  * [Questions](#questions)
  * [Acknowledgments](#acknowledgments)
  
  ### Installation

  ***
  ${data.install}
***
  
  ### Usage
  ${(data.usage)}
 

  ### Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license, data.name)}
 
  
  
  ## Questions
  Send questions to ${data.email} or visit <a href="https://github.com/${data.github}" target= "_blank" >my profile! </a><br>
  
  ## Acknowledgments
~~~
${data.thanks}
~~~

  
  
  `;




}

module.exports = generateMarkdown;
