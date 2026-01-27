import { Sun } from 'lucide-react'; 
import logo from "../assets/logo.png";
export default function Header({onCountryChange}){
    const countriesWithCities=[
    {name:"Egypt",value:"Egypt"},
    {name:"Palestine",value:"Palestine"},
    {name:"SaudiArabia",value:"SaudiArabia"},
    {name:"Jordan",value:"Jordan"},
    {name:"Morocco",value:"Morocco"}
  ];
    return (
        <div className="w-full bg-amber-100 h-16" id="header">
            <div id="content" className=" w-[90%] h-14 flex justify-between items-center mx-auto p-2 ">
                < img src={logo} alt="" className='w-14 h-14 '/>
                <div className="flex px-20 items-center gap-20">
                    <form class="max-w-sm mx-auto">
                        <select onChange={(e)=>onCountryChange(e.target.value)} id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-hidden bg-amber-50 text-non text-sm rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
                            {countriesWithCities.map((country)=>(
                                 <option key={country.value} value={country.value}>{country.name}</option>
                            ))}
                        </select>
                    </form>
                <Sun color="red" size={24} />  
                </div>
            </div>
        </div>
    )
}