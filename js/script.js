// var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
// var rootElement = document.documentElement

// function handleScroll() {
//   // Do something on scroll
//   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
//   if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
//     // Show button
//     scrollToTopBtn.classList.add("showBtn")
//   } else {
//     // Hide button
//     scrollToTopBtn.classList.remove("showBtn")
//   }
// }

// function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// }
// scrollToTopBtn.addEventListener("click", scrollToTop)
// document.addEventListener("scroll", handleScroll)

$(document).ready(function() {
  $(".up").click(function() {
       $('html, body').animate({
           scrollTop: $(".down").offset().top
       }, 1000);
   });
  });

  $(document).ready(function() {
    $(".down").click(function() {
         $('html, body').animate({
             scrollTop: $(".up").offset().top
         }, 1500);
     });
    });