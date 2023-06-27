
const data = [
    {
        bgImg:"./images/bg1.jpg",
        canImg:"./images/can1.png",
        nextImg:"./images/can1.png",
        bgColor:"hsl(66, 35%, 45%)",
        h1Color:"hsl(66, 60%, 30%)",
        pColor:"hsl(66, 35%, 25%)",
        name:"Cheeky <br> Lime",
        price:"$3.23",
    },

    {
        bgImg:"./images/bg2.jpg",
        canImg:"./images/can2.png",
        nextImg:"./images/can2.png",
        bgColor:"hsl(260, 65%, 78%)",
        h1Color:"hsl(260, 65%, 40%)",
        pColor:"hsl(260, 65%, 30%)",
        name:"Berries <br> Blast",
        price:"$4.11",
    },

    {
        bgImg:"./images/bg3.jpg",
        canImg:"./images/can3.png",
        nextImg:"./images/can3.png",
        bgColor:"hsl(359, 48%, 66%)",
        h1Color:"hsl(359, 98%, 36%)",
        pColor:"hsl(359, 48%, 26%)",
        name:"Strawberry <br> Yum",
        price:"$3.00",
    }
    ,
    {
        bgImg:"./images/bg4.jpg",
        canImg:"./images/can4.png",
        nextImg:"./images/can4.png",
        bgColor:"hsl(34, 74%, 65%)",
        h1Color:"hsl(34, 74%, 48%)",
        pColor:"hsl(34, 74%, 38%)",
        name:"Orange <br> Crush",
        price:"$2.53",
    }
    
]


const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImg = document.getElementById("productImg");
const nextProductImg = document.getElementById("nextProductImg");
const backgroundImg = document.getElementsByClassName("imageCon")[0];
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const serialNo = document.getElementById("serialNo");
const hamBurger = document.getElementById("hamBurger");
const list =  document.getElementsByClassName("centerNav")[0];
let index = 0;


const responsiveList = ()=>{
    
    list.parentElement.style.background = data[index].bgColor;
    list.firstElementChild.style.backgroundColor = data[index].bgColor;
   
}
    
    
    const loadData = ()=>{
        responsiveList();
        productName.previousElementSibling.style.color = data[index].pColor;
        
        productName.innerHTML = data[index].name;
        productName.style.color = data[index].h1Color;
        productName.classList.add("animateH1");
        
        productPrice.innerHTML = data[index].price;
        
        productImg.src = data[index].canImg;
        productImg.classList.add("animateCan");
        
        
        backgroundImg.style.background = `url("${data[index].bgImg}")`;
        
        nextProductImg.classList.add("animateNextCan")
        serialNo.innerHTML = `${index+1}/${data.length}`
        document.body.style.backgroundColor = data[index].bgColor;
        
        
    setTimeout(()=>{
        productImg.classList.remove("animateCan");
        productName.classList.remove("animateH1");
        nextProductImg.classList.remove("animateNextCan")
    },1000)
}


leftBtn.addEventListener("click", ()=>{
    index--;
    
    if (index<0)
    {
        index=data.length-1;
    }

    setTimeout(() => {
            if (index==data.length-1)
            {
                nextProductImg.src = data[0].nextImg;
            }
            else
            {
                nextProductImg.src = data[index+1].nextImg;
            }
            
    }, 1000);
    
    loadData();
   
})

rightBtn.addEventListener("click", ()=>{
    index++;

    if (index>data.length-1)
    {
        index=0;
    }
  
    setTimeout(()=>{
        if (index+1>data.length-1)
        {
            nextProductImg.src = data[0].nextImg;
        }
        else
        {
            nextProductImg.src = data[index+1].nextImg;
        }
    },1000)
    
    loadData();
})



loadData();



hamBurger.addEventListener("click", ()=>{
    if (hamBurger.classList.contains("show"))
    {
        hamBurger.classList.remove("show")
        list.style.transform = "translateY(-8em)";
    }
    else
    {
        list.style.transform = "translateY(6rem)";
        hamBurger.classList.add("show");

    }
    hamBurger.parentElement.parentElement.style.backgroundColor = data[index].bgColor;
    let li = list.firstElementChild.getElementsByTagName("li");
    Array.from(li).forEach(element => {
        element.style.border = `1px solid ${data[index].pColor}`;
        element.style.boxShadow = `0 5px ${data[index].pColor}`;
        element.style.margin = "5px 0";
    });
    list.style.width = "100%";

    responsiveList();
})

