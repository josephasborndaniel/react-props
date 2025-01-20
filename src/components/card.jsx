function Card(props)
{
    return(
        <>
        <div className="border w-[260px] p-2 rounded-xl m-5">
            <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <div className="mt-2 text-md text-neutral-600"><p>{props.desc}</p>

         </div>
        </div>
        </>
    )
}

export default Card;