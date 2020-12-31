function diamond(number) {
  //let dollar ='$'
  debugger
  let output2 = []
  let count = number
  var i, j, k;
  for (i = 0; i < number; i++) {
    let penampung = ' '
    //console.log(i)
    for (j = 0; j < count; j++) {
      penampung += ' '
    }
    penampung += '$ '

    for (k = 1; k <= number - count; k++) 
      if (k === number - count) {
        penampung += '$'
      }
      else {
        penampung += '  '
      }
    
    count--
    console.log(penampung)
    output2.push(penampung)


  }
  output2.pop()
  output2.reverse().forEach(el=>{
    console.log(el)
  })


}


diamond(3)
diamond(4)
diamond(10)