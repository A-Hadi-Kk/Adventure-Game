#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

function startGame() {
    console.log(chalk.magentaBright("\t \t \tWelcome to the Adventure Game!\n"));

    inquirer.prompt({
        type: 'input',
        name: 'playerName',
        message: 'What is your name?',
        validate: (input: string) => {
            return input !== '' ? true : 'Please enter your name.';
        }
    }).then((answers) => {
        const playerName = answers['playerName'];
        console.log(chalk.blueBright(`\t \t \t Welcome, ${playerName}! Let's begin.\n`));
        explore();
    });
}

function explore() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: chalk.green('What do you want to do?'),
        choices: ['Fight the dragon', 'Open the treasure chest', 'Run away', 'Explore the cave', 'Talk to the wizard']
    }).then((answers) => {
        const action = answers['action'];
        switch (action) {
            case 'Fight the dragon':
                console.log('You fought bravely, but the dragon defeated you.');
                break;
            case 'Open the treasure chest':
                console.log('You found a treasure chest full of gold! You win!');
                break;
            case 'Run away':
                console.log('You ran away from danger. Better luck next time.');
                break;
            case 'Explore the cave':
                console.log('You entered a dark cave and found a hidden passage.');
                exploreCave();
                break;
            case 'Talk to the wizard':
                console.log('The wizard grants you a magical item to aid you on your journey.');
                break;
            default:
                console.log('You stand still, unsure of what to do.');
                break;
        }

        inquirer.prompt({
            type: 'confirm',
            name: 'playAgain',
            message: chalk.yellowBright('Do you want to play again?')
        }).then((answers) => {
            const playAgain = answers['playAgain'];
            if (playAgain) {
                console.log(chalk.blue('\n \t \t \t Starting a new adventure...\n'));
                explore();
            } else {
                console.log(chalk.bgGreenBright('\t \t \tThanks for playing!'));
            }
        });
    });
}

function exploreCave() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: chalk.green('You find yourself in a branching tunnel. What do you do?'),
        choices: ['Follow the left path', 'Follow the right path', 'Return to the entrance']
    }).then((answers) => {
        const action = answers['action'];
        switch (action) {
            case 'Follow the left path':
                console.log('You encounter a group of bats, but find a valuable gemstone.');
                break;
            case 'Follow the right path':
                console.log('You stumble upon a sleeping troll, quietly backtrack and find a secret exit.');
                break;
            case 'Return to the entrance':
                console.log('You decide to return to the entrance of the cave.');
                break;
            default:
                console.log('You stand still, unsure of what to do.');
                break;
        }
    });
    console.log(
        chalk.italic.bold.magenta("\t \t \t Welcome to Adventure Game Project! ")
    )      
}

startGame();