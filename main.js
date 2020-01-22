console.log('hey')

const dinosaurs = [
    {type: 't-rex', name: 'albert'},
    {type: 'stegosaurus', name: 'ryan'},
    {type: 'terodactyl', name: 'eugene'}    
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

const buildDinosaurCard = () => {
    let domString ='';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += '<div class="dinosaur">';
        domString +=    `<h3>Type: ${dinosaurs[i].type}</h3>`;
        domString +=    `<p>Name: ${dinosaurs[i].name}</p>`;
        domString += '</div>'
        
    }
    printToDom('dino-barn', domString);
};

buildDinosaurCard();
