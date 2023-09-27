// import { useState } from "react";
import logo from "@/assets/Logo.png";
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from '../../shared/types';
import useMediaQuery from "@/hook/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";


type Props={
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
};


const Navbar = ({selectedPage,setSelectedPage}:Props) => {
    const flexBetween="flex items-center justify-between"
    const isAboveMediumScreen=useMediaQuery("(min-width:1060px)")
    const [isMenuToggled,setIsMenuToggled]=useState<boolean>(true)
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 py-6 z-30 w-full`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} gap-16 w-full`}>
                <img src={logo} alt="Logo" />

                {/* Right Side */}
                {isAboveMediumScreen?
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                        <Link page="Benefits"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
                        <Link page="Our Classes "selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
                        <Link page="Contact Us"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
                      
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                    </div>
                </div>
                 :(
              
                  <button className="rounded-full bg-secondary-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="h-6 w-6 text-white cursor-pointer" />
                  </button>
          
              )}
            </div>
        </div>
        </div>
        {/* MOBILE MENU MODAL */}
    {!isAboveMediumScreen && isMenuToggled &&(
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* CLOSE MENU  */}
        <div className="flex justify-end py-12 ">
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-600 mr-[70px] mb-8"/>
            </button>
        </div>

    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                 <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                 <Link page="Benefits"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
                 <Link page="Our Classes "selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
                 <Link page="Contact Us"selectedPage={selectedPage}  setSelectedPage={setSelectedPage}></Link>
    </div>
    </div>

     )}
</nav> 
)
}

export default Navbar
