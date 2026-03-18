const lis = document.querySelectorAll('li[role="tab"]');
const divs = document.querySelectorAll('div[role="tabpanel"]')

divs.forEach(div =>{

        div.style.display = "none";
    });


lis.forEach((li) =>{

    li.addEventListener("click", (event)=>{

        divs.forEach(div =>{

            div.style.display = "none";
        });

        console.log(li.querySelector("a").href.slice(43));

        // let div = document.getElementById(li.querySelector("a").href.slice(66));
        // div.style.display = "block";
    });

});