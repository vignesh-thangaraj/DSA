let fibnocciLength = 4;


if(fibnocciLength >= 1){
  let series= [0, 1]

  for(let i=1; i< fibnocciLength; i++){
    series.push(series[i]+series[i-1])
  }

  console.log(series)


  let current=1, previous = 0, temp = 0

  for(let i=0; i< fibnocciLength; i++){
    temp = current
    current += previous
    previous = temp
  }

  console.log("Last digit in the series: ",current)
}else{
  console.log("no series found!")
}


