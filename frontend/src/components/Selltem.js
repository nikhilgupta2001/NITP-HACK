import React,{useState,useEffect} from 'react'
import ItemCard from './Card/ItemCard';



export default function SellItem() {


  // let Dishes = [];
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  let [Dishes,setDishes]=useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let _id=1;
    var dish = {
      price, name, imageUrl,_id
    }

    // Dishes.push(dish);
    
    //setDishes(Dishes.push(dish));

    setDishes(oldDish => [...oldDish,dish]);
    // setState(Dishes);
  }
  

  return (
    <div>
      <div className="container border border-success">
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="form-row mr-2 ml-2 mt-4 mb-0">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Dish Name</label>
              <input
                name="name"
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="name"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Image</label>
              <input
                name="image"
                type="file"
                class="form-control"
                id="inputPassword4"
                placeholder="Select file"
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Price</label>
            <input
              name="price"
              type="number"
              class="form-control"
              id="inputAddress"
              placeholder="Add price"
              onChange={e => setPrice(e.target.value)}
            />
          </div> 

          <button type="submit" class="btn btn-primary mt-2">
            Add Dish
              </button>
        </form>
      </div>

      <div>
        {
          Dishes.map((dish) => { 
               <ItemCard key={dish._id}
              price={dish.price}
              name={dish.name}
              imageUrl={dish.imageUrl}
            />
          })
        }
      </div>
    </div>


  )
}

