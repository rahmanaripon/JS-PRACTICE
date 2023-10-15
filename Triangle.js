function myTriangle(base, height){
    return (0.5 * base * height)
}
document.getElementById('triangle').onclick= function(){
    let base=parseFloat(prompt('Enter the base number'))
    let height= parseFloat(prompt('Enter the height number'))
    console.log(myTriangle(base, height))
    document.getElementById('triangleresult').innerText= 'The base is '+ base + 'and the height is '+ height+ ' so the triangle is '+ (myTriangle(base, height))
}