let services = [
    {name:"Макияж", pic:"images/Tilda_Icons_6bs_eye.svg", desc:"Макияж премиум класса. Вы полнен лучшеми визажистами России", pice:2000},
    {name:"Маникюр", pic:"images/Tilda_Icons_6bs_manikure.svg", desc:"Люксовый маникюр. Все возможные цвета под любое настроение.", pice:1500},
    {name:"Стрижка", pic:"images/Tilda_Icons_6bs_scisors.svg", desc:"Стрижем исключительно под горшок. Иногда бреем на лысо, качественно!", pice:100},
    {name:"Бритье", pic:"images/Tilda_Icons_6bs_barber.svg", desc:"Бреем хорошо! Ваша борода в надежных руках.", pice:1000}
];

function setCard(obj, parent){
    let card = document.createElement("div");
    let caption = document.createElement("h2");
    caption.innerText = obj.name;
    let img = document.createElement("img");
    img.src = obj.pic;
    img.alt = obj.name;

    card.appendChild(caption);
    card.appendChild(img);

    card.setAttribute("class", "service__card");
    parent.appendChild(card);
}

/*let card = document.createElement("div");
let caption = document.createElement("h2");
caption.innerText = services[0].name;
let img = document.createElement("img");
img.src = services[0].pic;
img.alt = services[0].name;

card.appendChild(caption);
card.appendChild(img);

/!*
 card.setAttribute(name, value) - добавить атрибут
 *!/

card.setAttribute("class", "service__card");*/
//document.body.innerHTML = card.outerHTML; // =( можно но не надо
/*document.body.appendChild(card);*/ //appenChild - добавь внутрь. Добавить ребенка.

/*
for in тщлько для объектов
for of тщлько для массивов
*/

let container = document.createElement("div");
container.className = "service"; // добавить атрибут (это второй метод добавления атрибута)
// htmlFor - добавить атрибут for

//container.style = "background-color: #bebebe;"; //добавляем css стиль с помощью атрибута style

container.style.backgroundColor = "#ffbede";
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${services.length}, 1fr)`;
container.style.gap = "2rem";
container.style.width = "1000px";
container.style.position = "absolute";

for(let val of services){
    setCard(val, container);
}

document.body.appendChild(container);

//innerWidth => 100vw
// innerHeight => 100wh
// screen.width, screen.height => разрешение экрана, которое установил себе пользователь

let box = document.body.lastElementChild;


console.log(box.offsetHeight); //покажет высоту контейнера
console.log(innerHeight);
box.style.top = (innerHeight - box.offsetHeight) / 2 + "px";
box.style.left = (innerWidth - box.offsetWidth) / 2 + "px";


















