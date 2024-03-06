import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import SocialMedia from "../components/SocialMedia"
import FooterSection from "../components/FooterSection"
import { copyrightSign } from "../assets/icons";

export default function Footer() {
    return(
        <footer
            id='footer'
            className="max-container"
        >
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img 
                            src={footerLogo}
                            alt="logo" 
                            width={150}
                            height={46}
                        />
                    </a>
                    <p className="mt-6 leading-7 text-base font-montserrat text-white-400 sm:max-w-sm">
                    Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex gap-5 mt-8">
                        {socialMedia.map(sm => 
                            <SocialMedia key={sm.alt} {...sm} />
                        )}
                    </div>
                </div>
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map(fl => 
                        <FooterSection key={fl.title} {...fl} />
                    )}
                </div>
            </div>
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img 
                        src={copyrightSign} 
                        alt="copyright sign"
                        width={20}
                        height={20}    
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>
        </footer>
    )
}