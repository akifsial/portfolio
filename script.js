const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true ,   
    tablet: {
        smooth: true
    }
   });


function CircleMouseFollower(){
    window.addEventListener('mousemove',function(event){
        document.querySelector('.mini-circle').style.transform=`translate(${event.clientX}px,${event.clientY}px)`
    })


}

CircleMouseFollower()

//----


// gsap.
// to(".animate-text",{
//     y:0,
//     duration:2,
//     stagger:.3
// })

// gsap.to(".animate-text-bottom",{
//     y:'1',
//     duration:2,
//     stagger:0.5
// })

function FirstPageAnimation(){

    var anim=gsap.timeline()

    anim.to(".nav",{
        y:-10,
        opacity:1,
        // duration:0.5

    })

    anim.to(".animate-text",{
        y:0,
        // duration:0.5,
        
    })

    // anim.to(".third-heading",{
    //     y:0,
    //     x:200,
       
    // })


    anim.to(".animate-text-bottom",{
        y:0,
        delay:-1,
        stagger:0.3
        
    })


    anim.to(".topnav",{
        opacity:1,
        delay:-0.6,
        ease:Expo.easeInOut

    })
}


FirstPageAnimation()


// function scrool(){
// var a=document.getElementById('fh')
//     window.scrollTo({
//         top:a.offsetTop

//     })
// }


// function scrollToElement(elementId) {
//     const element = document.getElementById(elementId);
//     if (element) {
//         scroll.scrollTo(element);
//     }
// }

// function scrool(){
//     scrollToElement('fh');
// }



