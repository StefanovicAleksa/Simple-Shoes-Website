export default function Rating({imgURL, rating, marginClass="mt-8", flexPositionClass='justify-start'}) {
  return (
    <div className={"flex gap-2.5 " + flexPositionClass + " " + marginClass}>
        {imgURL &&
        <img 
          src={imgURL} 
          alt="rating star"
          width={24}
          height={24}
        />}
        <p className='font-montserrat text-slate-gray text-xl leading-normal'>({rating})</p>
    </div>
  )
}
