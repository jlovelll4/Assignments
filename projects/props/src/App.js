import React from 'react';
import Product from "./Product"

const App = () => {
  
  
  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr" ,
    gridRowHeight: "200px",

  }
  const products = [
    {
    title="Hammer Pants",
    subtitle="Hammerz",
    URL="https://www.amazon.com/Black-Hammer-Parachute-Vanilla-Costume/dp/B00XAQVW2G",
    description="Real men wear these" 
  },
  ]
mappedProducts = products.map((product, i) =>{
  return <Product title ={product.title}
                  description={product.description}
                  key={i + product.title}/>
})

return(
  <div style={styles}>
    {mappedProducts}
  </div>
)
return (
  <div style = {styles}>
  <Product title="Hammer Pants" subtitle="Hammerz" URL="https://www.amazon.com/Black-Hammer-Parachute-Vanilla-Costume/dp/B00XAQVW2G" description="Real men wear these."/>
  <Product title="Shoes" description="Buy one shoe, get another for free" subtitle=""/>
  <Product title="T-Shirts" description="Buy a Smedium, and never pick up a girl again."/>
  <Product title="Fanny-Packs" description="For Men, but really not cool"/>
  <Product title="Lighter" description="Zippos are for real men."/>
  <Product title="Sandals" description="Ha! Won't find those here, wussy"/>
  <Product title="Beef Jerkey and cheese" description="Because Vegans"/>
  <Product title="Jacket" description="To share with your woman, unless you wear Smediums"/>
  <Product title="Deoderant" description="Because you stink"/>
  <Product title="Carbonated Water" description="Regular water sucks!"/>
  </div>
)
}
export default App;
