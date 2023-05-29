import { BsBasketFill } from 'react-icons/bs'
import { RiUserFill, RiUserAddFill } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        

        <>
            <div className="bg-purple-800 fixed top-0 w-full z-20 flex ">
                <div className="  container mx-auto h-16 md:h-36 flex items-center justify-center md:justify-between">
                    
                   
                    <nav className="hidden md:flex gap-x-8 text-sm font-semibold">
                        <Link to="/" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 pr-9 " id='logo'>
                        <img id='imas' className='h-28 ' src="https://cdn.discordapp.com/attachments/931978220163694612/1095354750427476078/unnamed.png" alt="" />
                        </Link>
                        
                    

                        <Link to="/Login" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100 ml-96" >
  <RiUserFill size={20} />
  Giriş Yap
</Link>
                        <Link to='/Sepet' className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100">
                            <BsBasketFill size={20} />
                            Sepetim
                        </Link>
                    </nav>

                </div>
            </div>
            <div className="container mx-auto flex md:hidden items-center h-10 px-2 justify-between">
                <div className="flex items-center gap-x-2 text-sm font-semibold text-gray-800">
                    <HiLocationMarker size={18} className="text-primary-brand-color" />
                    Teslimat Adresi Belirle
                </div>
                <IoIosArrowForward size={18} className="text-primary-brand-color" />
            </div>
        </>
    )
}