// TODO: Include packages needed for this application



const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');

const questions = () => {
    return inquirer.prompt([

                         //PROJECT NAME/TITLE/DESCRIPTION
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the name of your project',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please give your project a description',
        },
                           //INSTALLATION/USAGE //
        {
            type: 'input',
            name: 'installation',
            message: 'What technologies are needed to run this application?',
        },

        {
            type: 'input',
            name: 'usage',
            messsage: 'What is this application used for?',
        },
                         // LICENSE //
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use for this project?',
            choices: ['MIT'],
            default: ["MIT"],
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
            message: 'What commands run tests?',
        },

                           // GH USERNAME/EMAIL //
        {
            type: 'input',
            name: 'Github username',
            message: 'What is your Github username?',
        },
 
        {
            type: 'input',
            name: 'email',
            message: "What is a good email for users and contributors to send questions?",
            
        },
    ])

}

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
questions()
// getting user answers 
.then(answers => {
    return generate(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})

