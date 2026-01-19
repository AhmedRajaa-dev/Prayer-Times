export default function Prayer({name,time}){
    return(
        <div className="prayer flex items-center justify-between px-3 py-5 bg-slate-500 mb-6 rounded-md text-2xl border-black ">
            <p className="name_prayer">{name}</p>
            <p className="time_prayer">{time}</p>
        </div>
    )
}