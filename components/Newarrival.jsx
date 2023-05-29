import Slider from 'react-slick'
import { AiOutlineHeart } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
 

export default function Newarrival() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
};
  return (
    <div className='px-2 mx-auto mt-12'>
      <h1 className='font-semibold text-center text-lg'>Yeni Gelenler</h1>
 <Slider {...settings}>
         <div className='ürün'>
         <a  href="#">
            <img className="w-full h-96 p-1 border-2  object-cover"  src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568252153947/xxxtentacion.png" alt="1" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. sadsa </h1>
         
          <s className='text-xs inline-block pt-5'>₺199.00</s>
          <h1 className='pl-80 pt-5  font-bold inline-block '>
          <button className='pr-2'><AiOutlineHeart/></button>
          <button className='pr-2'><BsBasket/></button>
          ₺100.00
          </h1>
          
         </a>
          </div >
            <div className='ürün'>
          <a href="#">
            <img className="w-full h-96 p-1 border-2  object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568663199794/bigg_reflektor.png" alt="" />
          </a>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. sadsa </h1>


          <s className='text-xs inline-block pt-5'>₺199.00</s>
          <h1 className='pl-80 pt-5  font-bold inline-block '>
          <button className='pr-2'><AiOutlineHeart/></button>
          <button className='pr-2'><BsBasket/></button>
          ₺100.00
          </h1>
          </div>
          <div className='ürün'>
<a href="#">
  <img className="w-full h-96 p-1 border-2  object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503568940027996/carti_red.png" alt="" />
</a>
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. sadsa </h1>
<s className='text-xs inline-block pt-5'>₺199.00</s>
          <h1 className='pl-80 pt-5  font-bold inline-block '>
          <button className='pr-2'><AiOutlineHeart/></button>
          <button className='pr-2'><BsBasket/></button>
          ₺100.00
          </h1>

          </div>
          <div className='ürün'>
          <a href="#">
      <img className="w-full h-96 p-1 border-2 gap-2  object-cover" src="https://cdn.discordapp.com/attachments/931978220163694612/1092503569242013736/golden_rose.png" alt="" />

        </a>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. sadsa </h1>
        <s className='text-xs inline-block pt-5'>₺199.00</s>
          <h1 className='pl-80 pt-5  font-bold inline-block '>
          <button className='pr-2'><AiOutlineHeart/></button>
          <button className='pr-2'><BsBasket/></button>
          ₺100.00
          </h1>

          </div>
          
        </Slider>

    </div>
  )
}
