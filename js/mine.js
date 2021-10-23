


$(document).ready(function(){

    $(".loading , .spinner" ).fadeOut(2500)

})

$(window).scroll(function(){
    


    let scrollVal = $(window).scrollTop()


    if( scrollVal > 40){

    $(".navbar").removeClass("bg-transparent")

    $(".navbar").addClass("bg-light")

    $(".nav-link").removeClass("text-white")

    $(".nav-link").addClass("text-dark")


    $(".lightLogo").addClass("d-none")

    $(".coloredLogo").removeClass("d-none")

    

    }
    else{

        $(".navbar").removeClass("bg-light")

        $(".navbar").addClass("bg-transparent")

        $(".nav-link").removeClass("text-dark")

        $(".nav-link").addClass("text-white")

        $(".lightLogo").removeClass("d-none")

        $(".coloredLogo").addClass("d-none")

    

    }

    

})