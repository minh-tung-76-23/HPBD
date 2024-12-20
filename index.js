const contentLetterSrart_actived = "Click vào đây nè ... ✧\⁠\⁠(⁠>⁠o⁠<⁠)⁠ﾉ⁠✧" 
const mainContentLetter = " ❤.〜(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠〜 Chúc bạn tất cả!"

const backgroundImages = [
    "./img/bgr/bgr1.jpg",
    "./img/bgr/brg4.jpg",
    "./img/bgr/bgr2.jpg",
    "./img/bgr/bgr3.jpg",
    "./img/bgr/bgr5.jpg",
    "./img/bgr/bgr6.jpg"
]   
// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
              createLight(20);
            } else {
              createLight(40);
            }
      
            // Thay đổi background thành hình ảnh và thêm hiệu ứng chuyển đổi
            changeBackgroundImages(backgroundImages);
          }, 500);
        }, 500);
});
      
// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
// Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"];

    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add("snow");
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)];
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px";

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")";
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}

function changeBackgroundImages(images) {
    const container = document.querySelector(".background");
    let currentImageIndex = 0;

    container.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex++;

    setInterval(() => {
        container.classList.remove("animate-background"); // Xóa lớp hiệu ứng trước nếu đã tồn tại

        setTimeout(() => {
            container.style.backgroundImage = `url(${images[currentImageIndex]})`;
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }

            container.classList.add("animate-background"); // Thêm lớp hiệu ứng

        }, 700);
    }, 5000);
}

// Gọi hàm tạo hiệu ứng ban đầu
createLight(20);
changeBackgroundImages(backgroundImages);
       
