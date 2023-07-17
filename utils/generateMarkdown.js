// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "## License"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("In my generatemarkdonw function")
  console.log(data)
  return `# ${data.title}
new text example to the readMe


${data.description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation

${data.installation}

### Usage 

you can enjoy by ${data.usage}

### License 

you need a license ${data.license}

### Contributing 

${data.contributing}

### Tests

${data.tests}

### Questions 

if you any questions you can contact me at ${data.email}

[check out my other project](https;//github.com/${data.github})

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
