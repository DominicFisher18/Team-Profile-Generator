import inquirer from 'inquirer';
import { htmlGen, Manager, Engineer, Intern, questions} from './lib/index.js';

const positions = {Managers: [], Engineers: [], Interns: []};

const init = () => {
    inquirer.prompt(questions).then(ans => {
        const { fillPosition } = ans;

        if (!fillPosition) return htmlGen(positions);

        const { name, id, email, role } = ans;

        if (role == 'Manager') positions.Managers.push(new Manager(name, id, email, ans.officeNumber));
        if (role == 'Intern') positions.Interns.push(new Manager(name, id, email, ans.school));
        if (role == 'Engineer') positions.Engineers.push(new Manager(name, id, email, ans.github));

        init();
    })
};

init();


