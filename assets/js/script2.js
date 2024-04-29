import {robots} from  './robots.js';

const {id , series , name , sprite1 , avatar } = robots [0];
const cardContainer = document.getElementById('card-container');

const getRobotById = (id ) =>{
    return robots.find((robot)=> {
        return robot.id === id
    })
}

let robot1 = getRobotById ('011');

console.log(getRobotById ('015'))
console.log(getRobotById('010'))
console.log(robot1)

function getRobotBySeries (series){
    return robots.filter((robot) =>{
        return robot.series === series;
    }) 
}

let robot2 = getRobotBySeries(2);

console.log(robot2)



const createRobotCard = (robot)=>{

    const {name,weapon,avatar} = robot;
    const card = document.createElement("div");
    card.classList.add("col-md-4","mb-4");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src" , avatar)
    img.setAttribute("alt" , name)

    const carBoddy = document.createElement("div");
    carBoddy.classList.add("card-title");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent=name;

    const weaponInfo = document.createElement("p");
    weaponInfo.classList.add("card-text");
    weaponInfo.textContent = `Weapon : ${weapon}`;

    carBoddy.appendChild(title);
    carBoddy.appendChild(weaponInfo);

    cardInner.appendChild(img);
    cardInner.appendChild(carBoddy);

    card.appendChild(cardInner);

    return card;    ;
}


const getRobots = (robots)=>{
    const robotCards = robots.map(createRobotCard);
    robotCards.forEach ((card)=>{
        cardContainer.appendChild(card);
    });
}

getRobots(robots);