import {writeFile} from "fs";

const htmlGen = ({Managers,Engineers, Interns}) => {
    let output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./assets/css/style.css">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
    
        <nav>
            <h1>My Team</h1>
        </nav>
        <main>`;

        if (Managers.length) {
            output += "<div class = 'row' >";

            Managers.forEach(({ name, id, email, officeNumber }) => {
                output += `
                    <div class = 'card'>
                        <div class = 'header'>
                            <h2>${name}</h2>
                            <h3> <img src = './assets/images/Manager-Icon.png'/> Manager</h3>
                        </div>
                        <p> ID: ${id}</p>
                        <p> Email: <a href = 'mailto:${email}'> ${email}</a></p>
                        <p> Office number: ${officeNumber}</p>
                    </div>`;
            });
            output += `</div><h1>Managers</h1><hr>`};

            if (Engineers.length) {
                output += "<div class = 'row' >";

                Engineers.forEach(({ name, id, email, github }) => {
                    output += ` 
                    <div class = 'card'>
                        <div class = 'header'>
                            <h2>${name}</h2>
                            <h3> <img src = './assets/images/Engineer.png'/> Engineer</h3>
                        </div>
                        <p> ID: ${id}</p>
                        <p> Email: <a href = 'mailto:${email}'> ${email}</a></p>
                        <p> Github: <a href = 'https://github.com/${github}'> ${github}</a></p>
                    </div> `;
                });
                output += "</div><h1> Engineers</h1><hr>";
            };

            if (Interns.length) {
                output += "<div class = 'row' >";

                Interns.forEach(({ name, id, email, school }) => {
                    output += `
                    <div class = 'card'>
                        <div class = 'header'>
                        <h2>${name}</h2>
                            <h3> <img src = './assets/images/Intern-Icon.png'/> Intern</h3>
                        </div>
                        <p> ID: ${name}</p>
                        <p> Email: <a href 'mailto:${email}'> ${email}</a></p>
                        <p> School: ${school} </p>
                    </div>  `;
                });
                output += "</div><h1> Intern</h1><hr>"
            };

       output += `</main></body></html>`;


writeFile("./dist/teamBuilder.html", output, () => console.log("HTML file created..."))
};

export default htmlGen;