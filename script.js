const card2 = document.getElementById("anwser");
const clicked= document.getElementById("submit");
const ratings = document.getElementsByClassName("rating");
const message = document.getElementById("message");

clicked.addEventListener("click", (e) =>{
    e.preventDefault;
    card2.style.display="flex";
})

const ratingPressed = e =>{
    message.innerHTML = `You selected ${e.target.id} out of 5`;
}

for (let rating of ratings ){
    rating.addEventListener("click", ratingPressed);
}


