document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', (main) => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3370
  let likeArr= [0];
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/${imageId}`

  const commentsURL = `https://randopic.herokuapp.com/comments/${imageId}`

  //https://randopic.herokuapp.com/images/3370

})

function main(){
  fetchImages()

}

function theForm(imageData, likeArr){

  let imageName = document.getElementById("name")
  imageName.innerText= imageData.name
  let imagePicture= document.createElement("img")
  imagePicture.src= imageData.url

  let imageCard= document.getElementById("image_card")


  let likeButton = document.getElementById("like_button")
  likeButton.addEventListener("click", e=> {handleLike(e)})
  likeButton.innerText = "Like me"
  let numLikes = document.getElementById("likes")
  numLikes.innerText= imageData.like_count
// console.log(imageData)
  

  let submitForm = document.getElementById("comment_form")
  let submitButton=submitForm[1]
  submitForm.addEventListener("submit", e => {
    handleComment(e)
  })
  let commentList = document.createElement("li")
  commentList.innerText= imageData.comments
  


 //add finished appends here
 imageName.appendChild(imagePicture)

}


//for handling comment and likes, not enough time to remember/figure out how to bring data in from imageData
function handleComment(e){
  // console.log("test")
  let commentLocation =  document.getElementById("comment_input")
  let comment= document.createElement("ul")
  commentData= fetch(`https://randopic.herokuapp.com/comments/3370`, {
  method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageData.url,
      content: e.target[0].value
    })

   
  })
  
  
}


function handleLike(e){
  fetch('https://randopic.herokuapp.com/likes/3370', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageData.url
    })

  })
  

}

function fetchImages(){
  console.log()
  return fetch(`https://randopic.herokuapp.com/images/3370`)
  .then(response => response.json())
  .then(imageData => theForm(imageData))
  }





