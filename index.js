const inquirer = require('inquirer');

const fs = require('fs');

const promptList = 
    [
    {
        type: 'input',
        message: 'What text do you want?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color text do you want?',
        name: "textcolor",
    },
    {
        type: 'list',
        message: 'What shape do you want?',
        name: 'shape',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        message: 'What color shape do you want?',
        name: 'shapecolor',
    },
    ]

inquirer.prompt(promptList).then(({ text, textcolor, shape, shapecolor})) => {
    fs.writeFile("logo.svg", svg.render(), (err) => {err ? console.log(err) : console.log("Generated logo.svg")})
})
