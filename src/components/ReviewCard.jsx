import { star } from "../assets/icons"
import Rating from "./Rating"

export default function ReviewCard({imgURL, customerName, rating, feedback}) {
  return (
    <div className="flex items-center flex-col">
        <img 
        src={imgURL} 
        alt={customerName}
        width={120}
        height={120} 
        className='rounded-full object-cover'
        />
        <p className="mt-6 text-center max-w-sm info-text">{feedback}</p>
        <Rating rating={rating} imgURL={star} flexPositionClass='justify-center' marginClass='mt-3' />
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}
