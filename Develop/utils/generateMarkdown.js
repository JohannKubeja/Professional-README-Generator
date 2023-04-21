// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  
  const licenses = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    // add more license badges here as needed
  };
  
  const badgeUrl = licenses[license];
  if (!badgeUrl) {
    return "";
  }
  
  return `![License](${badgeUrl})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  
  const links = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    // add more license links here as needed
  };
  
  const linkUrl = links[license];
  if (!linkUrl) {
    return "";
  }
  
  return `[${license}](${linkUrl})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  
  return `## License
  
This project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  
  return `# ${data.title} ${licenseBadge}

## Description

${data.description}

${licenseSection}
`;
}

module.exports = generateMarkdown;