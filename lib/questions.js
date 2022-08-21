const questions = [
    {
        type: 'confirm',
        name: 'fillPosition',
        message: 'Would you like to fill a position?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What position would you like to fill?',
        choices: ['Manager', 'Intern', 'Engineer'],
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the employee?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the employee?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the phone number of the manager?',
        when: ({role}) => role == 'Manager'
    },
    {
        type: 'number',
        name: 'github',
        message: 'What is the github of the engineer?',
        when: ({role}) => role == 'Engineer'
    },
    {
        type: 'number',
        name: 'school',
        message: 'What is the school of the intern?',
        when: ({role}) => role == 'Intern'
    }
];



export default questions;

