export default function Pagination({curr,total,onChange}){

        const prev = <button  disabled={curr===1} onClick={()=>onChange(curr-1)}>PREV</button>
        const next = <button  disabled={curr===total} onClick={()=>onChange(curr+1)}>NEXT</button>
        const pages = new Array(total).fill(0).map((a,i)=>
           <button onClick={()=>onChange(i+1)} disabled={curr===(i+1)}>{i+1}</button>
        );

        return(
            <div>
                  {prev}
                  {pages}
                  {next}
            </div>  
          )
}