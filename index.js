// TODO: Include packages needed for this application



const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');

const promptUser = () => {
    return inquirer.prompt([

                         //PROJECT NAME/TITLE/DESCRIPTION
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your project (Required)',
             //validate input entry and return a string if the input value is empty
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log("I can't generate a README without a project title!");
                     return false;
                 }
             }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please give your project a description (Required)',
            validate: projectDesc => {
                if (projectDesc) {
                    return true;
                } else {
                    console.log("I can't generate a README without a description!");
                    return false;
                }
            }
        },
                           //INSTALLATION/USAGE //
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application? (Required)',
            validate: projectInst => {
                if (projectInst) {
                    return true;
                } else {
                    console.log("I can't generate a README without installation instructions!");
                }
            }

        },

        {
            type: 'input',
            name: 'usage',
            messsage: 'How do you use your application? (Required)',
            validate: projectUsg => {
                if (projectUsg) {
                    return true;
                } else {
                    console.log("I can't generate a README without knowig how the application is used!");
                }
            }
        },
                         // LICENSE //
        {
            type: 'input',
            name: 'license',
            message: 'What license did you use for this project? (Required)',
            validate: projectLis => {
                if (projectLis) {
                    return true;
                } else {
                    console.log("I can't generate a README without a license!");
                    return false;
                }
            }
        },
                          // TESTING/CONTRIBUTION //
        {
            type: 'input',
            name: 'contribution',
            message: 'How can people contribute to this project?',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'How can tests be updated?',
        },

                           // GH USERNAME/EMAIL //
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: projectUser => {
                if (projectUser) {
                    return true;
                } else {
                    console.log("I can't generate a README without a GH username!");
                }
            }
        },
 
        {
            type: 'input',
            name: 'email',
            message: "What is a good email for users and contributors to send questions? (Required)",
            validate: ProjectEm => {
                if (projectEm) {
                    return true; 
                } else {
                    console.log("I can't generate a README without an email address!");
                }
            }
        },
    ])
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to initialize program
promptUser()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
});


