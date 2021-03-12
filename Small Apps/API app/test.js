// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200 ){
//         console.log(xhr.responseText);
//     }
// }

// xhr.onprogress = function(){
//     console.log('Progressing');
// }

// xhr.open('GET', 'msg.txt', true);
// xhr.send();

// console.log('Hey');



// Promise

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(5);
//     }, 2000);
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then((number)=>{
//     console.log(number);
// })


//Get data from the text 

//text 

function getText(){
    fetch('msg.txt')
        .then(response =>{
         return response.text();
     }).then(data =>{
         console.log(data)
     }).catch(err => {
         console.log(err)
     })
}
//getText();


//json

function getJson(){
    fetch('test.json')
        .then(response =>{
         return response.json();   
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
}

//getJson();

//external API

function getExternalAPI(){



    fetch('https://randomuser.me/api/?results=5')
    .then(data =>{
     return data.json();   
    }).then(users => {

        var html ='';
        users.results.forEach(user => {
            
            html += 
            `
            <div class=users>
                <div>${user.name.title} ${user.name.first}</div>
                <img src="${user.picture.medium}" />

            </div>
            `

        })

        document.querySelector('.container').innerHTML = html;

        }).catch(err => {
            console.log(err);
        }) 
}

getExternalAPI();