import React from 'react'
import Cardall from './Cardall'
import Navbar from './Navbar'


function Prodectcart({tities}) {
  let prodect=prompt("")
  const datas=prodect.toLocaleUpperCase();
  if (datas==="MEN") {
    return (
      <>
      <Navbar tities="MEN"/>
      <div className=" container d-flex flex-wrap gap-4 mt-5">
         <Cardall img="https://m.media-amazon.com/images/I/71V5gEc8YVL._AC_UL480_FMwebp_QL65_.jpg" name="Lymio" detalis="
  Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt) "/>
      <Cardall img="https://m.media-amazon.com/images/I/71mmZUZ6JbL._AC_UL480_FMwebp_QL65_.jpg" name="NexaFlair" detalis="NexaFlair Casual Shirt for Men||Popcorn Shirt for Men||Spread Collar|| Men Stylish"/>
      <Cardall img="https://m.media-amazon.com/images/I/71W+kOgr4aL._AC_UL480_FMwebp_QL65_.jpg" name="Leriya Fashion" detalis="Leriya Fashion Men's Regular Fit Polo T-Shirt T-Shirt"/>
      <Cardall img="https://m.media-amazon.com/images/I/61jP8mz3XIL._AC_UL480_FMwebp_QL65_.jpg" name="DEELMO" detalis="DEELMO Men's Cotton Blend Mandarin Collar Self One Design Full Sleeve Casual Short Kurta"/>
      <Cardall img="https://m.media-amazon.com/images/I/610IIi6wHuL._SY741_.jpg" name="Lymio" detalis="Lymio Track Pant for Men || Track Pants || Plain Track Pant (Track-06-08)"/>
      <Cardall img="https://m.media-amazon.com/images/I/61JxTwwj-5L._AC_UL480_FMwebp_QL65_.jpg" name="BULLMER" detalis="Trendy Clothing Set with Shirt & Pants Co-ords for Men"/>
      <Cardall img="https://m.media-amazon.com/images/I/616OgZa32qL._AC_UL480_FMwebp_QL65_.jpg" name="Leriya Fashion" detalis="Leriya Fashion Textured Shirts for Men || Casual Shirt for Men || Shirt for Men|| Men Stylish Shirt"/>
      <Cardall img="https://m.media-amazon.com/images/I/71kE75JMKjL._AC_UL480_FMwebp_QL65_.jpg" name="Lymio" detalis="Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)"/>
     
      </div>
  </>
    )
  }else if(datas==="WOMEN"){

    return (
      <>
      <Navbar tities="WOMEN"/>
      <div className=" container d-flex flex-wrap gap-2 mt-5">
         <Cardall img="https://m.media-amazon.com/images/I/71ofsmesvpL._AC_UL480_FMwebp_QL65_.jpg" name="POSHAX" detalis="POSHAX Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (706-709)"/>
      <Cardall img="https://m.media-amazon.com/images/I/71tF9O0WgwL._AC_UL480_FMwebp_QL65_.jpg" name="Leriya Fashion" detalis="Leriya Fashion Party Wear Dress for Women | One Piece Dress for Women | Beach Dress for Women"/>
      <Cardall img="https://m.media-amazon.com/images/I/71Hy7lDZiaL._AC_UL480_FMwebp_QL65_.jpg" name="Lymio Dresses" detalis="Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (701-702)"/>
      <Cardall img="https://m.media-amazon.com/images/I/51EztyrOL-L._AC_UL480_FMwebp_QL65_.jpg" name="ROYALICA" detalis="ROYALICA Women Black and White Colour Collared Checked Shirt with Heavy Black Inner"/>
      <Cardall  img="https://m.media-amazon.com/images/I/712naEHTSUL._AC_UL480_FMwebp_QL65_.jpg" name="OM SAI LATEST CREATION" detalis="OM SAI LATEST CREATION One Piece Dress for Women | Beach Wear for Women | Western Dress | Vacation Outfits for Women"/>
      <Cardall img="https://m.media-amazon.com/images/I/415xsbjjE2L._AC_UL480_FMwebp_QL65_.jpg" name="Leriya Fashion" detalis="Leriya Fashion Party Wear Dress for Women | One Piece Dress for Women | Beach Dress for Women"/>
      <Cardall img="https://m.media-amazon.com/images/I/71iB9sQLcYL._AC_UL480_FMwebp_QL65_.jpg" name="POSHAX" detalis="POSHAX Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (706-709)"/>
      <Cardall img="https://m.media-amazon.com/images/I/61c6YnVx2gL._AC_UL480_FMwebp_QL65_.jpg" name="Leriya Fashion" detalis="Leriya Fashion Dress for Women Midi| One Piece Dress for Women| Beach Dress for Women| Birthday Dress for Women"/>
     
      </div>
      </>
    )
  }
  
}

export default Prodectcart
