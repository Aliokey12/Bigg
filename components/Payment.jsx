import { AiFillCreditCard } from "react-icons/ai";
import { MdOutlineReplay } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";

export default function Payment() {
  return (
<div className="container mx-auto mt-36">
<div class="grid grid-cols-4 gap-20 ">
  <div className="h-64 w-64 border-2 grid box" >
  <AiFillCreditCard className="card ml-[78px] mt-4"/>
    <strong className="ml-12">Taksitli Satış İmkanı</strong>
      <h1 className="text-sm text-gray-500 p-6">Tüm Kredi Kartlarına 9 Ay Taksit İmkanı.</h1>
  </div>
  <div className="h-64 w-64 border-2 grid box">
    <MdOutlineReplay className="card ml-[80px] mt-4"/>
    <strong className="ml-12">Taksitli Satış İmkanı</strong>
      <h1 className="text-sm text-gray-500 p-6">Tüm Kredi Kartlarına 9 Ay Taksit İmkanı.</h1>
  </div>
  <div className="h-64 w-64 border-2 grid box">
  <FaShippingFast className="card ml-[80px] mt-4"/>
  <strong className="ml-12">Taksitli Satış İmkanı</strong>
      <h1 className="text-sm text-gray-500 p-6">Tüm Kredi Kartlarına 9 Ay Taksit İmkanı.</h1>
  </div>
  <div className="h-64 w-64 border-2 grid box">
  <BsShieldFillCheck className="card ml-[80px] mt-4"/>
  <strong className="ml-12">Taksitli Satış İmkanı</strong>
      <h1 className="text-sm text-gray-500 p-6">Tüm Kredi Kartlarına 9 Ay Taksit İmkanı.</h1>
  </div>
  

</div>
</div>

  )
}
