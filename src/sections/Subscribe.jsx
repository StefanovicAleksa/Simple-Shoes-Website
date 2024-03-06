import Button from "../components/Button"

export default function Subscribe() {
    return(
        <section 
            id="contact-us"
            className="max-container flex justify-between items-center max-lg:flex-col"    
        >
            <h3 className='text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md'>
                Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
            </h3>
            <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border border-slate-gray rounded-full'>
                <input type="text" placeholder="subscribe@nike.com" className="input" />
                <Button label="Sign Up"/>
            </div>  
        </section>
    )
}