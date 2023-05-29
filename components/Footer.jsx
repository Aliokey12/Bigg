import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";



export default function Footer() {
  return (
    <div className='bg-slate-900 mt-32'>
    <div className="container mx-auto h-56">
    <div class="grid grid-cols-4 gap-12 ">
      <div className='text-white text-sm mt-5'>
        <a className='' href="#"><strong className=''>İletişim</strong></a>     
        <p className='mt-5'>Sinan, Hüsnü Karakaş Caddesi 07010 Muratpaşa/Antalya</p>
      <p className='mt-5'>+90 (507) 417 0808</p>
        <p className='mt-5'>altkulturstore@gmail.com</p>
      </div>
      <div className='text-white text-sm grid '>
  
        <a className='mt-5' href="#"><strong >Kurumsal</strong></a>
  
      <ul>
  <li>
      <a href="#"><small>İletişim</small></a> 
  </li>
  <li>
      <a href="#"><small>Hakkımızda</small></a> 
  </li>
  <li>
      <a href="#"><small>Hesabım</small></a> 
  </li>    
  <li>
      <a href="#"><small>Bilgi</small></a> 
  </li>  
      </ul>

            
      </div>
      <div className='text-white text-sm grid mt-5 '>
      <a href="#"><strong className=''>Yardım</strong></a>     
      <ul>
  <li>
      <a href="#"><small>Gizlilik ve Güvenlik</small></a> 
  </li>
  <li>
      <a href="#"><small>Mesafeli Satış Sözleşmesi</small></a> 
  </li>
  <li>
      <a href="#"><small>Sıkça Sorulan Sorular</small></a> 
  </li>    
 
      </ul>
  
      </div>
      <div className='text-white text-sm grid mt-5 '>
      <a href="#"><strong className=''> Hızlı Link </strong></a>     
      <ul>
  <li>
      <a href="#"><small>T-Shirt</small></a> 
  </li>
  <li>
      <a href="#"><small>Aksesuar</small></a> 
  </li>
  <li>
      <a href="#"><small>Sweatshirt</small></a> 
  </li>    
  <li>
      <a href="#"><small>Eşofman Altı</small></a> 
  </li>  
      </ul>
          
      <div>
<ul className='flex gap-x-5'>
  <li >
<button className="text-base"><a  href="https://www.instagram.com/biggwear/" target="_blank"><AiOutlineInstagram/></a></button>
  </li>
  <li>
  <button className="text-base"><a  href="#"><AiFillTwitterCircle/></a></button>
  </li>
  <li>
  <button className="text-base"><a target="_blank" href="https://www.tiktok.com/@furkanbigg"><FaTiktok/></a></button>
  </li>
  <li>
  <button className="text-base"><a  href="#"><AiFillFacebook/></a></button>
  </li>
  <li>
  <button className="text-base"><a  href="#"><BsSnapchat/></a></button>
  </li>
</ul>
      </div>
      </div>
      <h1 className=" w-[96vw] h-[50px] text-sm  text-center pt-3 ">Bigg© 2022 Tüm Hakları Saklıdır.</h1>
      </div>
    </div>
    </div>
  )
}
