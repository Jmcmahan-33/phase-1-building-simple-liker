// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hideError = document.querySelector("#modal")
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
console.log("hi")
hideError.classList.add("hidden")

  
  clickLike()
})

function errorMessage() {
  hideError.classList.add("hidden")

}

function clickLike() {
  document.addEventListener("click", (e) => {
    if(e.target.classList[0] === "like-glyph") {
      mimicServerCall()
      .then((response) => {
        const activated = e.target.classList.contains("activated-heart") 
        if(activated) {
          e.target.classList.remove("activated-heart");
          e.target.classList.innerHTML = EMPTY_HEART
        }else{
          e.target.classList.add("activated-heart")
          e.target.classList.innerHTML = FULL_HEART
        }
        activated
      })
      .catch(error => {
        hideError.remove("hidden")
        setTimeout(() => {
          errorMessage()
        },3000)
      })
    }
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
