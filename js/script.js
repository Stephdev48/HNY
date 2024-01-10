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



/* -------------bouton pour rafraîchir les facts !--------------*/

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


/*-------------séquence des cards---------------------*/
function start(){
    step1();
    setTimeout(() =>{
        step2();
    },"9400");
    setTimeout(() =>{
        step3();
    },"19000");
    setTimeout(() =>{
        step4();
    },"29000");
    setTimeout(() =>{
        step5();
    },"39000");

}

/*-----------fonctions de gestion des cards------------*/
function step1(){

    console.log("test 1 ok !!");
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
        step1img.style["max-width"] = "60%";
    },"1000");

    setTimeout(() =>{
        step1title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"8000");

    setTimeout(() =>{
      step1.style.display = "none";
    },"9000");
    
}

function step2(){

    console.log("test 2 ok !!");
    let step2 = document.getElementById("step2");
    console.log(step2);
    step2.style.display = "block";
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
        step2img.style["max-width"] = "60%";
    },"1000");

    setTimeout(() =>{
        step2title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"8000");

    setTimeout(() =>{
      step2.style.display = "none";
    },"9000");

}

function step3(){

    console.log("test 3 ok !!");
    let step3 = document.getElementById("step3");
    console.log(step3);
    step3.style.display = "block";
    step3.style.opacity = 1;

    let step3title = document.getElementById("step3_title");
    step3title.style.opacity = 1;

    let joke = document.getElementById("para3");
    joke.style.opacity = 1;

    let image = document.getElementById("step3img");
    image.style.opacity = 1;

    setTimeout(() =>{
        step3title.style.top = 0;
        joke.style.top = 0;
        step3img.style["max-width"] = "60%";
    },"1000");

    setTimeout(() =>{
        step3title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"8000");

    setTimeout(() =>{
      step3.style.display = "none";
    },"9000");
    
}

function step4(){

    console.log("test 4 ok !!");
    let step4 = document.getElementById("step4");
    console.log(step4);
    step4.style.display = "block";
    step4.style.opacity = 1;

    let step4title = document.getElementById("step4_title");
    step4title.style.opacity = 1;

    let joke = document.getElementById("para4");
    joke.style.opacity = 1;

    let image = document.getElementById("step4img");
    image.style.opacity = 1;

    setTimeout(() =>{
        step4title.style.top = 0;
        joke.style.top = 0;
        step4img.style["max-width"] = "60%";
    },"1000");

    setTimeout(() =>{
        step4title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"8000");

    setTimeout(() =>{
      step4.style.display = "none";
    },"9000");
    
}

function step5(){

    console.log("test 5 ok !!");
    let step5 = document.getElementById("step5");
    console.log(step5);
    step5.style.display = "block";
    step5.style.opacity = 1;

    let step5title = document.getElementById("step5_title");
    step5title.style.opacity = 1;

    let joke = document.getElementById("para5");
    joke.style.opacity = 1;

    let image = document.getElementById("step5img");
    image.style.opacity = 1;

    setTimeout(() =>{
        step5title.style.top = 0;
        joke.style.top = 0;
        step5img.style["max-width"] = "60%";
    },"1000");

    setTimeout(() =>{
        step5title.style.opacity = 0;
        joke.style.opacity = 0;
        image.style.opacity = 0;
    },"8000");

    setTimeout(() =>{
      step5.style.display = "none";
    },"9000");
    
}