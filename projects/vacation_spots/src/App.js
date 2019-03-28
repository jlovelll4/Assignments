import React from 'react';
import Card from  './Card'
const App = (props)=>{
  const styles = {
    div:{
      display:"grid",
      gridRowHeight:"200px",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: "10px",
      justifyContent: "center",
      alignItems: "center"
    }
  }
  const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      _id: "1" 
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      _id: "2"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      _id: "3"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
      _id: "4"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      _id: "5"
    }
  ]
  const mappedSpots = vacationSpots.map((spot) =>{
    let color
    if(spot.timeToGo === "Spring"){
      color = "yellow"
    } else if (spot.timeToGo === "Winter"){
      color = "blue"
    } else if (spot.timeToGo === "Fall") {
      color = "#D45B12"
    } else{
      color = "#F3BC2E"
    }
    let dollarSign
    if (spot.price < 500){
      dollarSign = "$"
    } else if (spot.price > 500 && spot.price < 1000) {
      dollarSign = "$$"
    } else{
      dollarSign = "$$$"
    }
    return <Card bgColor ={color}
                  dollar = {dollarSign}
                  key={spot._id}
                  place={spot.place}
                  price={spot.price}
                  time = {spot.timeToGo}
                  />  
  })
  

  return (
    <div style = {styles}>
      {mappedSpots}
    </div>
  )
} 
export default App;
