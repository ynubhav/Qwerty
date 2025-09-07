import { useNavigate } from "react-router-dom"

export function Logo(){
    const navigate=useNavigate();
    return(
        <button onClick={()=>navigate('/home')} className=" z-0 items-baseline justify-items-start gap-10 hidden sm:flex">
        <h1 className="fixed top-0 left-0 p-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-balance z-50">
          QWERTY.
        </h1>
      </button>
    )
}