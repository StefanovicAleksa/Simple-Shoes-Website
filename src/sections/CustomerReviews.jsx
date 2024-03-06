import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

export default function CustomerReviews() {
    return(
        <section id="customer-reviews"
            className="max-container"
        >
            <h2 className="font-palanquin text-4xl text-center font-bold">What Our <span className='text-coral-red'>Customers</span> Say?</h2>
            <p className='m-auto mt-4 max-w-lg text-center info-text'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className='mt-24 flex flex-wrap justify-evenly items-center gap-14'>
                {reviews.map(review => <ReviewCard key={review.customerName} {...review}/>)}
            </div>
        </section>
    )
}