import React from "react";
export default function Search(){
    return(
        <div>
            <div className=" backdrop-blur-xl bg-[#4d83ab] w-[40%] py-[60px] px-[50px] font-regular text-xl text-[#95b9d0]">
                <div className="grid gap-10">
                    <div className="grid gap-6">
                        <input type="text" placeholder="Another location" className="bg-[#4d83ab] border-[#4d83ab] outline-[#4d83ab]"/>
                        <p>Brimingham</p>
                        <p>New York</p>
                        <p>California</p>
                        <p>Manchester</p>
                    </div>
                        <div className="h-[2px] w-[100%] bg-white"></div>
                    <div className="grid gap-6 ">
                        <h1 className="text-white">Weather Details</h1>
                        
                            
                            <p>Cloudy <span className="ml-[350px] text-white">12%</span></p>
                            <p>Humidity <span className="ml-[330px] text-white">78%</span></p>
                            <p>Wind <span className="ml-[350px] text-white">1km/h</span></p>
                            <p>Rain <span className="ml-[365px] text-white">0mm</span></p>
                        
                            <div className="h-[2px] w-[100%] bg-white mt-[30px]"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}