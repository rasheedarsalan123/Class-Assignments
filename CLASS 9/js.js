let mybtn = document.getElementsByTagName("button")[0];
let myinput = document.getElementsByTagName("input")[0]
let input1 = document.createElement("input")
let input2 = document.createElement("input")
let input3 = document.createElement("input")
let mybtn2 = document.createElement("button")
mybtn2.innerText = "button"

    

mybtn.addEventListener("click", () => {
    let myinput1=input1;

 // Creating inputs based on the entered value
  for (let i = 0; i < myinput1.length; i++) {
    let newInput = document.createElement("input");
    newInput.value = myinput1[i];
   }
   
      
    mybtn.remove("button")
    myinput.remove("myinput")

    document.getElementsByTagName("body")[0].appendChild(input1)
    document.getElementsByTagName("body")[0].appendChild(input2)
    document.getElementsByTagName("body")[0].appendChild(input3)
    document.getElementsByTagName("body")[0].appendChild(mybtn2)

    
    mybtn2.addEventListener("click", () => {





        mybtn2.remove("button")
        input2.remove("input")
        input3.remove("input")
        input1.remove("input")
         let inputVal = input1.value;
         let inputVa2 = input2.value;
         let inputva3=input3.value;
   let navbar = document.createElement("div");
  navbar.classList.add("navbar");

  let navItem1 = document.createElement("div");
  navItem1.classList.add("nav-item");
  navItem1.innerText = inputVal;

  let navItem2 = document.createElement("div");
  navItem2.classList.add("nav-item");
  navItem2.innerText = inputVa2;

  let navItem3 = document.createElement("div");
  navItem3.classList.add("nav-item");
  navItem3.innerText = inputva3;

  navbar.appendChild(navItem1);
  navbar.appendChild(navItem2);
  navbar.appendChild(navItem3);

  document.body.appendChild(navbar);



    })
})
















