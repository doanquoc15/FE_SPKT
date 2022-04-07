//function slide anh
var index = 0;
LoadImage = function () {
    var imgs = [ './asstets/image/logo3.jpg', './asstets/image/logo4.jpg','./asstets/image/logo1.jpg'];
    var len = imgs.length
    document.getElementById('slideImg').src = imgs[index];
    index++;
    if (index == len)
        index = 0;
}
setInterval(LoadImage, 3000);

// Nav Bar
window.onscroll = function () {
    myFunction()
};
function myFunction() {
    var navbar = document.querySelector("#css-navbar");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.className = " nav-bar" + " nav-animation" + " bg-white";
    } else {
        navbar.className = navbar.className.replace(" nav-animation bg-white", "");
    }
}
//Login and logout footer
// const buttons = document.querySelectorAll('.footer a')
// buttons.forEach(btn => {
//     btn.addEventListener('click', function (ev) {
//         var rect = this.getBoundingClientRect();
//         var left = ev.clientX - rect.left - this.clientLeft + this.scrollLeft;
//         var top = ev.clientY - rect.top - this.clientTop + this.scrollTop;
//         var ripples = document.createElement('span')

//         ripples.style.left = left + 'px';
//         ripples.style.top = top + 'px';

//         this.appendChild(ripples);

//         setTimeout(() => {
//             ripples.remove()
//         }, 1000);
//     })
// });
// 1. Function Show()
var Nodes = document.querySelectorAll('.button-btn');
var contents = document.querySelectorAll('.show-btn');
Nodes.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        for (var i = 0;i < Nodes.length;i++)
            Nodes[i].style.background = "rgb(51, 51, 51)"

        var id = null;
        var h = 0;
        id = setInterval(show, 5)
        function show() {
            if (h == 30)
                clearInterval(id)
            else {
                h += 2;
                for (var i = 0;i < contents.length;i++) {
                    contents[i].style.height = 0 + 'px'
                }
                for (let i = 0;i < contents.length;i++) {

                    if (index == i) {
                        Nodes[i].style.background = '#888'
                        contents[i].style.height = h + '%'
                    }
                }
            }
        }
    })
})

// Close content


var times = document.querySelectorAll('.show-btn i')
times.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        for (var i = 0;i < contents.length;i++) {
            contents[i].style.height = 0 + 'px'
        }
        for (var i = 0;i < Nodes.length;i++)
        {
            Nodes[i].style.background = '#333'
        }
    })
})
