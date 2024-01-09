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

function refreshJoke(){
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
    step1();
    step2();

}

function step1(){

    console.log("test ok !!");
    let step1 = document.getElementById("step1");
    console.log(step1);
    step1.style.opacity = 1;

    let step1title = document.getElementById("step1_title");
    step1title.style.opacity = 1;

    let joke = document.getElementById("para1");
    joke.style.opacity = 1;

    let image = document.getElementById("step1img");
    image.style.opacity = 1;

    setTimeout(() =>{
        step1title.style.top = 0;
        joke.style.top = 0;
    },"1000");

    setTimeout(() =>{
        step1title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"3000");

    setTimeout(() =>{
      step1.style.display = none;
    },"3500");
    

}

function step2(){

    console.log("test ok !!");
    let step2 = document.getElementById("step2");
    console.log(step2);
    step2.style.opacity = 1;

    let step2title = document.getElementById("step2_title");
    step2title.style.opacity = 1;

    let joke = document.getElementById("para2");
    joke.style.opacity = 1;

    let image = document.getElementById("step2img");
    image.style.opacity = 1;

    setTimeout(() =>{
        step2title.style.top = 0;
        joke.style.top = 0;
    },"1000");

}