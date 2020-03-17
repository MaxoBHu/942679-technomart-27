var link=document.querySelector('.write-us');var popup=document.querySelector('.write-us-block');var close=popup.querySelector('.modal-close');var form=popup.querySelector('form');var name=popup.querySelector('[name=username]');var email=popup.querySelector('[name=usermail]');var message=popup.querySelector('[name=usermessage]');var isStorageSupport=!0;var storage='';try
{storage=localStorage.getItem('name')}
catch(err)
{isStorageSupport=!1}
link.addEventListener("click",function(evt)
{evt.preventDefault();popup.classList.add("modal-show");if(storage)
{name.value=storage
email.focus()}
name.focus()});close.addEventListener("click",function(evt)
{evt.preventDefault();popup.classList.remove("modal-show");popup.classList.remove("modal-error")});form.addEventListener("submit",function(evt)
{if(!name.value||!email.value||!message.value)
{evt.preventDefault();popup.classList.remove("modal-error");popup.offsetWidth=popup.offsetWidth;popup.classList.add("modal-error")}
else{if(isStorageSupport)
{localStorage.setItem("name",name.value)}}});window.addEventListener("keydown",function(evt)
{if(evt.keyCode===27)
{evt.preventDefault();if(popup.classList.contains("modal-show"))
{popup.classList.remove("modal-show");popup.classList.remove("modal-error")}}})
var mapLink=document.querySelector(".map");var mapPopup=document.querySelector(".map-block");var mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(evt)
{evt.preventDefault();mapPopup.classList.add("modal-show")});mapClose.addEventListener("click",function(evt)
{evt.preventDefault();mapPopup.classList.remove("modal-show")});window.addEventListener("keydown",function(evt)
{if(evt.keyCode===27)
{evt.preventDefault();if(mapPopup.classList.contains("modal-show"))
{mapPopup.classList.remove("modal-show")}}});var buyLink=document.querySelectorAll(".button-buy"),index,button;var buyPopup=document.querySelector(".buy-block");var buyClose=buyPopup.querySelector(".modal-close");var buyCont=buyPopup.querySelector(".continue");for(index=0;index<buyLink.length;index++)
{button=buyLink[index];button.addEventListener("click",function(evt)
{evt.preventDefault();buyPopup.classList.add("modal-show")});buyClose.addEventListener("click",function(evt)
{evt.preventDefault();buyPopup.classList.remove("modal-show")});buyCont.addEventListener("click",function(evt)
{evt.preventDefault();buyPopup.classList.remove("modal-show")});window.addEventListener("keydown",function(evt)
{if(evt.keyCode===27)
{if(buyPopup.classList.contains("modal-show"))
{evt.preventDefault();buyPopup.classList.remove("modal-show")}}})}
var slideIndex=1;showSlides(slideIndex);function plusSlide()
{showSlides(slideIndex+=1)}
function minusSlide()
{showSlides(slideIndex-=1)}
function currentSlide(n)
{showSlides(slideIndex=n)}
function showSlides(n)
{var i;var slides=document.getElementsByClassName("item");var points=document.getElementsByClassName("slider-points-item");if(n>slides.length)
{slideIndex=1}
if(n<1)
{slideIndex=slides.length}
for(i=0;i<slides.length;i++)
{slides[i].style.display="none"}
for(i=0;i<points.length;i++)
{points[i].className=points[i].className.replace(" active","")}
slides[slideIndex-1].style.display="block";points[slideIndex-1].className+=" active"}