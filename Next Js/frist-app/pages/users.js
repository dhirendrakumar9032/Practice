import { useEffect,useState } from "react"
import Navbar from "./navbar"
import style from "../style/style.module.css"
import axios from "axios"


const users = () => {

    const [userData,setUserData]=useState([])
useEffect( ()=>{

   axios.get("https://reqres.in/api/users")
   .then((res)=>setUserData(res.data.data))
   .catch((err)=>console.log(err))

   
    

},[])
console.log(userData)
    return (
        < >
            <Navbar/>
            <div className={style.grid}>
                {
                    userData.map((item,index)=>{
                        return <div key={index}>
                            <img src={item.avatar} alt="avatar"/>
                            <h4>{item.first_name}</h4>
                            <h5>{item.email}</h5>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default users
