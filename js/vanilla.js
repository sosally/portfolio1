  //popup close

  let closeButton = document.getElementById("closeButton");
  let popup = document.querySelector(".popup");

  closeButton.addEventListener("click", function() {
    popup.remove();
      
  });

//공간소개 이미지
function changeImage(imagePath) {
  const imageElement = document.getElementById("space_image");

  imageElement.style.opacity = "0";
  
  setTimeout(function() {
    imageElement.src = imagePath;
    imageElement.style.opacity = "1";
    
   },500);
}

//news
// const icons = document.querySelectorAll('.fa-plus');

document.querySelector('.news1').addEventListener("mouseover", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "translateY(-20px)";
  this.style.boxShadow = "5px -5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(0,0,0,0.1), 5px 5px 10px rgba(0,0,0,0.1), -5px 5px 10px rgba(0,0,0,0.1)";
  
  // icons.forEach(function(icon) {
  //   icon.style.transform = 'rotate(90deg)';
  // });
});

document.querySelector('.news1').addEventListener("mouseout", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.transform = "";
  this.style.boxShadow = "";
});

document.querySelector('.news2').addEventListener("mouseover", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.boxShadow = "5px -5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(0,0,0,0.1), 5px 5px 10px rgba(0,0,0,0.1), -5px 5px 10px rgba(0,0,0,0.1)";
  this.style.transform = "translateY(-20px)";
});

document.querySelector('.news2').addEventListener("mouseout", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.boxShadow = "";
  this.style.transform = "";
});

document.querySelector('.news3').addEventListener("mouseover", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.boxShadow = "5px -5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(0,0,0,0.1), 5px 5px 10px rgba(0,0,0,0.1), -5px 5px 10px rgba(0,0,0,0.1)";
  this.style.transform = "translateY(-20px)";
});

document.querySelector('.news3').addEventListener("mouseout", function() {
  this.style.transition = "transform 0.3s ease";
  this.style.boxShadow = "";
  this.style.transform = "";
});