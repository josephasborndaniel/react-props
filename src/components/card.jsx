function Card({desc,img,title,type,ratings})
{
    return(
        <>
        <div className="border w-[260px] p-2 rounded-xl m-5 ">
            <div className="relative">
            <img src= {img} alt="" className="w-full h-40 object-cover rounded-lg "/>
            {
                ratings >= 3.5 ? (<div className="absolute bottom-0 m-2 px-2 py-[2px] rounded-full bg-green-100 text-green-700 text-sm ">Best Seller</div>): null
            }
            
            </div>
            <div className="flex justify-between items-center">
               <p> {title}</p>
               <span className= { type =='Veg' ? 'h-2 w-3 rounded-full bg-green-800': 'h-2 w-3 rounded-full bg-red-800'}></span>
                </div>
         <div className="mt-2 text-sm text-neutral-600">
            <p>{desc}</p>
           </div>
        </div>
        </>
    )
}

export default Card;