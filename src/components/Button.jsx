import { arrowRight } from "../assets/icons";

export default function Button({label, iconURL, backgroundClass="bg-coral-red", textColorClass="text-white", borderColorClass="border-coral-red"}) {
  return (
    <button className={"flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full " + textColorClass + " " + borderColorClass + " " + backgroundClass}>
        {label}
        {iconURL && 
        <img 
        src={iconURL} 
        alt="button icon" 
        className="ml-2 rounded-full w-5 h-5"
        />}
        
    </button>
  )
}
