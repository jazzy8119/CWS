
const countries = [
    {
        name: 'Sweden',
        capital: 'Stockholm',
        population: '10 million',
        
    },
    {
        name: 'Norway',
        capital: 'Oslo',
        population: '5 million',
        
    },
    {
        name: 'Lebanon',
        capital: 'Beirut',
        population: '6 million',
        
    },
];

let cont = document.getElementById('container');
let ul = document.createElement('ul');
const add = document.getElementById('next');
const reduce = document.getElementById('previous'); 

let i = 0;

//-- Adding a button to show next list of the countries --
add.addEventListener('click', function(event) {
    if ( i >= countries.length) {
        return false;
    }

    ul.innerHTML = "";
    for (const [key, value] of Object.entries(countries[i])) {
        
        let li = document.createElement('li');
        ul.appendChild(li);
        cont.appendChild(ul); // Created a "li" inside a "ul" which goes into my div
        li.innerHTML = (`${key}: ${value}`);
}
i++;
});

// -- Adding another button to show previous list of countries --
reduce.addEventListener('click', function(event) {
    if ( i === 0) {
        i = countries.length;
    }
    
    i--;
    ul.innerHTML = "";
    for (const [key, value] of Object.entries(countries[i])) {
        let li = document.createElement('li');
        ul.appendChild(li);
        cont.appendChild(ul);
        li.innerHTML = (`${key}: ${value}`);
}
});

// -- Creating a submit button to get the value of each text box and pushing it into the object --
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event){
    event.preventDefault();
    let arr = {
        name: document.getElementById('countryname').value,
        capital: document.getElementById('countrycapital').value,
        population: document.getElementById('countrypopulation').value,
    }
    countries.unshift(arr);
    myForm.reset();
})

// -- Create a "show more" button that shows names of country only! --
// -- Using map()to get inside the array to find an object --

let cont2 = document.getElementById('container2');
let ul2 = document.createElement('ul');
const showMore = document.getElementById('showmore');

let x = 0;

showMore.addEventListener('click', function(){
    
    if (x < 1){
    ul2.innerHTML = ""; 
    countries.map(function(thename){
    let li = document.createElement('li');
    let btnElem = document.createElement('button');
    let btnDel = document.createElement('button');
    btnElem.setAttribute('class', 'show-btn');
    btnDel.setAttribute('class', 'del-btn');
    btnElem.innerHTML = 'Show';
    btnDel.innerHTML = 'Delete';
    ul2.append(btnElem);
    ul2.append(btnDel);
    ul2.append(li);
    cont2.append(ul2);
    li.innerHTML = thename.name;
    showMore.innerHTML = 'Show Less';
   })
   x++;
}else {
    ul2.innerHTML = "";
    showMore.innerHTML ='Show More'
    x--;
}
});



let showButton = document.getElementsByClassName('show-btn');
let delButton = document.getElementsByClassName('del-btn');
let cont3 = document.getElementById('container3');
let ul3 = document.createElement('ul');


for (j = 0; j < showButton.length; j++) {
    showButton[j].addEventListener('click', function(open){
        ul3.innerHTML = "";
        for (const [key, value] of Object.entries(countries[j])) {
            let li = document.createElement('li');
            ul3.append(li);
            cont3.append(ul3);
            li.innerHTML = `${key}: ${value}`;
            
        }
    })
};



