


$(document).ready(function(){

    $(".loading , .spinner" ).fadeOut(2500)

})

$(window).scroll(function(){
    


    let scrollVal = $(window).scrollTop()


    if( scrollVal > 40){

    $(".navbar").removeClass("bg-transparent , py-3")

    $(".navbar").addClass("bg-white , shadow-sm")

    $(".nav-link").removeClass("text-white")

    $(".nav-link").addClass("text-dark")


    $(".lightLogo").addClass("d-none")

    $(".coloredLogo").removeClass("d-none")

    

    }
    else{

        $(".navbar").removeClass("bg-white , shadow-sm")

        $(".navbar").addClass("bg-transparent , py-3")

        $(".nav-link").removeClass("text-dark")

        $(".nav-link").addClass("text-white")

        $(".lightLogo").removeClass("d-none")

        $(".coloredLogo").addClass("d-none")

    

    }

    

})