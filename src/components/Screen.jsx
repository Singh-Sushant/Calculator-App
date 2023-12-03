export const Screen=({show})=>{
   
    return(
        <>
            
           <div className="screen d-flex justify-content-center">

           <div className="border border-dark h-5 w-75  mb-3 mt-5 screen shadow  bg-dark rounded text-light  overflow-hidden" style={{height:'47px'}} >

                {show}
                </div>
           </div>
            
        </>
    )
}