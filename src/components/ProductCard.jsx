import { star } from "../assets/icons"
import Rating from "./Rating"

export default function ProductCard({imgURL, rating, name, price}) {
  return (
    <div>
      <img 
      src={imgURL} 
      alt="product image"
      width={282}
      height={282} 
      />
      <Rating imgURL={star} rating={rating}/>
      <h3 className='mt-2 font-semibold font-palanquin text-2xl leading-normal'>{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}
