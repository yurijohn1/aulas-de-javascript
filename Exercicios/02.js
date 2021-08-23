function medir(a,b,c){
    if(a == b && b ==c){
        console.log('Equilátero')
    } else if(a == b || b == c || c == a){
        console.log('Isósceles')
    } else{
        console.log('Escaleno')
    }
}

medir(5,5,5)
medir(8,8,9)
medir(1,2,3)