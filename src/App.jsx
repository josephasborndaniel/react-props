import Card from "./components/card";
const  items = [
  {
      name: "Margherita Pizza",
      img: "https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Classic cheese and tomato pizza with a crispy thin crust.",
      price: 250,
      type: "Veg",
      rating: 3.4
  },
  {
      name: "Butter Chicken",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Creammy and rich butter chicken cooked with aromatic spices.",
      price: 350,
      type: "Non-Veg",
      rating: 3.2
  },
  {
      name: "Paneer Tikka",
      img: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Grilled paneer marinated with spices and yogurt.",
      price: 200,
      type: "Veg",
      rating: 4.6
  },
  {
      name: "Prawn Curry",
      img: "https://plus.unsplash.com/premium_photo-1669150849060-1d6a6dabad14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Delicious prawn curry in a flavorful coconut-based gravy.",
      price: 400,
      type: "Non-Veg",
      rating: 4.7
  }
];

console.log(items);

function App()
{
  return(
    <>
    
      <div className=" m-5 flex justify-center flex-wrap">
        {
          items.map(item=> <Card img = {item.img}  title ={item.name} desc = {item.desc} type = {item.type}  ratings = {item.rating} /> )

        }
      </div>

    
    </>
  )
}


export default App;
