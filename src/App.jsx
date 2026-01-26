import { useEffect, useState } from 'react'
import Prayer from './component/Prayer'
import Header from './component/header';

export default function App() {
  const [prayerTimes,setPrayerTimes]=useState({});
  const [dateTime,setDateTime]=useState("");
  const [city,setCity]=useState("Cairo");
  const cities=[
    {name:"Cairo",value:"Cairo"},
    {name:"Alexandria",value:"Alexandria"},
    {name:"Giza",value:"Giza"},
    {name:"Mansoura",value:"Mansoura"},
    {name:"Luxor",value:"Luxor"}
  ];
console.log(city);
console.log(prayerTimes);

  useEffect(()=>{
    const axiosPrayerTimes=async()=>{
      try {
        const res= (await fetch(`https://api.aladhan.com/v1/timingsByCity/19-01-2025?city=Eg&country=${city
          
        }`));
        const dataPrayer=await res.json()
        setPrayerTimes(dataPrayer.data.timings)
        setDateTime(dataPrayer.data.date.gregorian.date);
        
      } catch (error) {
        console.error("error:",error);
      }
    }
    axiosPrayerTimes()
  },[city]);
  const formatTime=(time)=>{
    if(!time){
      return "00:00"
    }
    let [hours,minutes]=time.split(":").map(Number);
    let period=hours>12?"PM":"AM";
    hours=hours%12 ||12;
    return `${hours}:${minutes<10?"0"+minutes:minutes} ${period}`


  }
return (
    <>
    <Header/>
      <section className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center ">  
        <div className="container w-120 bg-white py-8 px-7 rounded-xl ml-[18%] ">
          <div className="top-section flex justify-between pb-10 border-b-1 mb-10">
            <div className="date w-64">
            <h3 className="text-2xl">Date</h3>
            <h4 className="text-2xl">{dateTime}</h4>
            </div>
            <div className="city">  
            <h3 className="text-2xl" >City</h3>
            <select name="" id=""  className="w-64 bg-slate-500 rounded-md outline-none py-1 px-2.5 text-xl mt-2" onChange={(e)=>setCity(e.target.value)}> 
              {cities.map((city)=>(
                <option key={city.value} value={city.value}>{city.name}</option>
              
              ))}
            </select>
            
            </div>
          </div>
            <Prayer name={"Al-Fajr"} time={formatTime(prayerTimes.Fajr)}/>
            <Prayer name={"Al-Dhuhr"} time={formatTime(prayerTimes.Dhuhr)}/>
            <Prayer name={"Al-Asr"} time={formatTime(prayerTimes.Asr)}/>
            <Prayer name={"Al-Maghrib"} time={formatTime(prayerTimes.Maghrib)}/>
            <Prayer name={"Al-Isha"} time={formatTime(prayerTimes.Isha)}/>
        </div>
      </section>
      
    </>
  )
}

 
