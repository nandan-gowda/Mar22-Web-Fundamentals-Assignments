const image1= document.querySelector('img')

image1.addEventListener('mouseover', beforehoverfn)
function beforehoverfn(){
    image1.classList= 'beforehover'
}



image1.addEventListener('mouseout', afterhoverfn)
function afterhoverfn(){
    image1.classList= 'afterhover'
}