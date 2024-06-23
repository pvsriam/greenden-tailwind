let sidenav=document.getElementById('sidenav')
let menuicon=document.getElementById('menuicon')
let closenav=document.getElementById('close-nav')
menuicon.addEventListener('click',function(){
    sidenav.style.right=0
})

closenav.addEventListener('click',function()
{
    sidenav.style.right='-50%'
})


//product search functionality

let productcontainer=document.getElementById('product-container')
let search=document.getElementById('search')
let productlist=productcontainer.querySelectorAll('div')

search.addEventListener('keyup',function(){
    let enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
        {
            let productname=productlist[count].querySelector('p').textContent
            if(productname.toUpperCase().indexOf(enteredvalue)<0)
                {
                    productlist[count].style.display='none'
                }
            else
            {
                productlist[count].style.display='block'
            }
        }
})
console.log(productlist)