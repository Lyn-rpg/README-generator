// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](mg.shields.io/badge/license-MIT-blue)`
  };
  return licenseString
};

function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents:
1. [Description](#description) 
2. [Installation](#Installation)
3. [Usage](#Usage)  
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [License](#License)
7. [GitHub](#GitHub)
8. [E-mail](#E-mail)
9. [Questions](Questions)

## Description
${data.description} 



## Installation
${data.installation}



## Usage
${data.usage}



## Contributing
${data.contributing}



## Tests
${data.tests}



## License
${licenseBadge(data)}



# GitHub
${data.github}



## E-mail
${data.email}
}

## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.`
}

module.exports = generateMarkdown;
