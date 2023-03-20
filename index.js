const containerEl = document.getElementById("container");
const thankyouState = document.getElementById("thankyou-state");

const submitBtn = document.getElementById("submit-btn");
const ratingBtn = document.getElementById("rating-btn");

const ratingEl = document.getElementById("rate-given");
const rates = document.querySelectorAll(".rating-button");

submitBtn.addEventListener("click", function(){
    return (
        thankyouState.classList.remove("hidden"),
        containerEl.style.display = "none"
    )
});

ratingBtn.addEventListener("click", function(){
    return (
        thankyouState.classList.add("hidden"),
        containerEl.style.display = "block"
    )
});


for (let i = 0; i < rates.length; i++){
    rates[i].addEventListener("click", function(){
        ratingEl.innerHTML = `You have selected` + rates[i].innerHTML + `out of 5`
    })
}

