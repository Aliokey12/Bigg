import { FaTshirt } from "react-icons/fa";
import{GiTShirt} from "react-icons/gi";
import  { GiArmoredPants } from 'react-icons/gi';
import  { GiCrystalEarrings } from 'react-icons/gi';



export default function Categori() {
  return (
    <div className='bg-white py-4 mt-8 '>
<div className="container mx-16  ">
<div className="salam">
<ul className="gap-x-14">

<li className="inline-block border-2  p-2 px-8 h-28">
<a href="#" className=" ">
<FaTshirt className=" w-[50px] h-[50px]  " />
  T-SHİRT
</a>
</li>

<li className="inline-block ml-56 border-2 p-2 px-4 h-28">
<a className='  ' href="#">
<FaTshirt className="  w-[50px] h-[50px] ml-5" />
SWEATSHİRT
</a>
</li>


<li className="inline-block ml-56 border-2 px-6 p-2 h-28">
  <a className=' ' href="#">
<GiArmoredPants className=" w-[50px] h-[50px]  ml-6" />
ESOFMAN ALTI
</a>
</li>





<li className="inline-block  ml-56 border-2 px-4 p-2 h-28">
<a className=' ' href="#">
<GiCrystalEarrings className=" w-[50px] h-[50px] ml-3 " />
  AKSESUAR
</a>
</li>

</ul>
</div>
</div>
      </div>
  )
}
