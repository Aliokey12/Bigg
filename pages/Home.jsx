import React from 'react'
import Header from '../components/Header.jsx'
import Herosection from '../components/Herosection.jsx';
import Categories from '../components/Categori.jsx';
import Newarrival from '../components/Newarrival.jsx';
import Payment from '../components/Payment.jsx';
import Category from '../components/Kategori.jsx';
import Footer from '../components/Footer.jsx';
import İnput from "../components/İnput.jsx";

export default function Home() {
 return ( 
 <>
 <Header/>
 <Category/> 
 <Herosection/> 
 <Categories/> 
 <Newarrival/> 
 <Payment/> 
 <Footer/>
 <İnput/>
  </>
 )
}
