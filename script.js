let num = +prompt ('сколько ручек')


for (let i = 0; i < num ; i++){
    let str = String(i)
if (str[str.length -2] == 1) {
    console.log(i + 'ручек')
}
if (str.slice(-1)==1 ) {
    console.log(i + 'ручка')
} else if (str.slice(-1) > 1 && str.slice(-1) < 5) {
    console.log(i + 'ручки')
} else if (str.slice(-1) > 4 && str.slice(-1) < 21 || str.slice(-1) == 0 ) {
    console.log(i + 'ручек')
} }