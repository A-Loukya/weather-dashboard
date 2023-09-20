import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";


export default function Home() {

    const [Items, setItems] = useState("")
    const [city, setCity] = useState("India")
    const [abc, setAbc] = useState(false)

    function callapi(){
        fetch(`http://api.weatherapi.com/v1/current.json?key=3b4886bba144427ba83134259221106&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )

    }
    useEffect(() => {
      callapi();
    }, [])
  


  return (
    <div>
      <div className="backdrop-blur-xl bg-gradient-to-b from-[rgb(116,181,231)] to-[rgb(152,197,228)] w-[80%] mx-auto  h-[750px] flex  ">
        <div className="flex items-center w-[60%] justify-center ">
          <h2 className=" text-8xl font-bold  ">{Items ? Items.current.temp_c: "26"}&#x2103;</h2>

          <div className="flex  flex-col ml-[5%] ">
            <h1 className="text-5xl font-medium mb-[5%] ">{Items ? Items.location.name : ""}</h1>
            <p className=" text-md font-regular ">
            {Items ? Items.location.localtime : "Date&Time"}
            </p>
          </div>

          <div className="flex w-[15%] flex-col items-center">
          <img src={Items ? Items.current.condition.icon:"h"} size={20} className="w-[100px] h-[90px] "/>
            <p className=" text-sm font-regular ">{Items ? Items.current.condition.text : "search"}</p>
          </div>
        </div>

        <div className=" backdrop-blur-sm bg-[#4d83ab] w-[40%] py-[6%] px-[4%] font-regular text-xl text-[#95b9d0]">
          <div className="grid gap-10">
            <div className="grid gap-6">
              <div className="flex items-center">
              <input
                type="text"
                placeholder="Search another location"
                className="bg-[#4d83ab] border-none outline-none "

                onChange={e => setCity(e.target.value)}
              />
              <AiOutlineSearch onClick={callapi} className="cursor-pointer" size={25}/>
              </div>
              
              <div className="h-[2px] w-[100%] bg-white "></div>
            
            </div>

            <div className="h-[2px] w-[100%] bg-white"></div>
            <div className="grid gap-6 ">
              <h1 className="text-white">Weather Details</h1>

              <p className="flex items-center justify-between px-10">
                Cloudy <span className=" text-white">{Items ? Items.current.cloud: "26"}%</span>
              </p>
              <p className="flex items-center justify-between px-10 ">
                Humidity <span className=" text-white ">{Items ? Items.current.humidity: "26"}%</span>
              </p>
              <p className="flex items-center justify-between px-10 ">
                Wind <span className=" text-white">{Items ? Items.current.wind_kph: "26"}kph</span>
              </p>
              <p className="flex items-center justify-between px-10 ">
                Rain <span className=" text-white">{Items ? Items.current.pressure_mb: "26"}mb</span>
              </p>

              <div className="h-[2px] w-[100%] bg-white mt-[30px]"></div>
            </div>
            <div className="flex items-center justify-around">
              <div className="grid gap-6  ">
              <h1 className="text-white text-3xl font-medium">Latitude</h1>
              <p className="text-2xl font-regular ml-[30px] ">{Items ? Items.location.lat: "26"}</p>
              </div>
              <div className="grid gap-6">
              <h1 className="text-white text-3xl font-medium">Longitude</h1>
              <p className="text-2xl font-regular ml-[45px] ">{Items ? Items.location.lon: "26"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
