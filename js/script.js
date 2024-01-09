    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill1 = document.getElementById('para1');
            fill1.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill2 = document.getElementById('para2');
            fill2.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill3 = document.getElementById('para3');
            fill3.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill4 = document.getElementById('para4');
            fill4.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill5 = document.getElementById('para5');
            fill5.innerHTML=data.value;
        })


// var btn = document.querySelector("button");
// btn.addEventListener("click", main);

function main(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill1 = document.getElementById('para1');
            fill1.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill2 = document.getElementById('para2');
            fill2.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill3 = document.getElementById('para3');
            fill3.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill4 = document.getElementById('para4');
            fill4.innerHTML=data.value;
        })

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {return response.json()})
        .then((data)=>{
            console.log(data);
            let fill5 = document.getElementById('para5');
            fill5.innerHTML=data.value;
        })
}



function start(){
    console.log("test ok !!");
    let step1 = document.getElementById("step1");
    console.log(step1);
}

