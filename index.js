$(document).ready(function(){
    $(".slick-slider").slick(
        {
            autoplay : true,
            infinite: true,
            arrow : true,
            autoplaySpeed : 2000,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
       
        }
    );
  });


let btnScroll = document.getElementById("scrolltotop")
window.onscroll = () => {enableBtnScrollToTop()}
    

const enableBtnScrollToTop = () => {
    if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
        btnScroll.style.display = 'flex'
    }else {
        btnScroll.style.display = 'none'
    }
}
