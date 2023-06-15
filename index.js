const inquirer = require('inquirer');

const fs = require('fs');

const promptList = [
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

    inquirer.prompt(questions).then(({ text, textcolor, shape, shapecolor }) => {
        let shapetype;
        switch (shape) {
            case 'square':
                shapetype = new Square();
                break;
            case 'circle':
                shapetype = new Circle();
                break;
            case 'triangle':
                shapetype = new Triangle();
                break;
        }
    
        shapetype.setColor(shapecolor);
    
        const svg = new SVG();
        svg.setText(text, textcolor);
        svg.setShape(shapetype);
        console.log(svg.render());
        
        fs.writeFile('./logo.svg', svg.render(), (err) => {err ? console.log(err) : console.log('You generated a logo!')});
    })