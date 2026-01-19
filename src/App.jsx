import { useEffect, useState } from 'react'
import Prayer from './component/Prayer'

export default function App() {
  const cities=[
    {name:"Cairo",value:"Cairo"},
    {name:"Alexandria",value:"Alexandria"},
    {name:"Giza",value:"Giza"},
    {name:"Mansoura",value:"Mansoura"},
    {name:"Luxor",value:"Luxor"}
  ];
 
return (
    <>
      <section className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center ">
        <div className="container w-120 bg-white py-8 px-7 rounded-xl ml-[18%] ">
          <div className="top-section flex justify-between pb-10 border-b-1 mb-10">
            <div className="date w-64">
            <h3 className="text-2xl">Date</h3>
            <h4 className="text-2xl">29/4/2002</h4>
            </div>
            <div className="city">  
            <h3 className="text-2xl" >City</h3>
            <select name="" id="" className="w-64 bg-slate-500 rounded-md outline-none py-1 px-2.5 text-xl mt-2"> 
              {cities.map((city)=>(
                <option key={city.value} value={city.value}>{city.name}</option>
              
              ))}
            </select>
            </div>
          </div>
            <Prayer name={"al"} time={"4:47"}/>
            <Prayer name={"al"} time={"4:47"}/>
            <Prayer name={"al"} time={"4:47"}/>
            <Prayer name={"al"} time={"4:47"}/>
            <Prayer name={"al"} time={"4:47"}/>
        </div>
      </section>
      
    </>
  )
}

 
