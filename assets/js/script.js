const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist")
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflowhidden")
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});