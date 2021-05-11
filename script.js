// window.onscroll = changePos;

// function changePos() {
//     var nav = document.getElementById("stickyNav");
//     if (window.pageYOffset > 670) {
//         nav.style.position = "fixed";
//         nav.style.top = "0";
//     } else {
//         nav.style.position = "";
//         nav.style.top = "";
//     }
// }


const nav = document.getElementById('stickyNav');
    let topOfNav = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        // document.body.style.paddingTop = 0;
      }
    }

    window.addEventListener('scroll', fixNav);


// var text = document.getElementsByClassName("text");
// var exampleimg = document.getElementsByClassName("exampleimg");
// exampleimg.addEventListener("mouseover", examplechange);
// exampleimg.addEventListener("mouseout", examplechangeback);
// function examplechange(event)
// {
//  text.style.display = "block";
// }

// function examplechangeback()
// {
//   text.style.display = "none";
// }