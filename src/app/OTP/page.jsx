"use client"
import React from "react";
import Mubmit from "./Jaction";
import Link from "next/link";
const OTO = () => {
  async function Sandel(formData) {
    const response = await Mubmit({
      NAME: formData.get("name"),
      MOBIL: formData.get("mobileNUM"),
    });
  }
  return (
    <div>
     
        <div
          className="iPhone14 Pro Max - 1 inline-flex flex-col space-y-14 items-center justify-start px-11 py-20 bg-yellow-500"
          style={{ width: 430, height: 932 }}
        >
          <img className="Group3 1 w-60 h-12" src="/Gr.png" />
          <div className="Frame1 flex flex-col space-y-16 items-center justify-start w-full">
          <form action={Sandel}>
            <input
              name="name"
              placeholder="    नाम "
              className="Rectangle1 w-full h-20 bg-gray-300 rounded-xl"
            />
            <input
              name="mobileNUM"
              placeholder="   MOBIL NUMBER"
              className="Rectangle3 w-80 h-1/5 bg-gray-300 rounded-xl"
            />
               </form>
            <div className="Group4 w-56 h-20">
              <div className="Rectangle2 flex items-center justify-center flex-1 h-full px-8 py-6 bg-red-500 rounded-3xl">
                <button type="submit" className="SENDOTP text-3xl font-extrabold text-white">
                  <Link href="/Contact">SEND OTP</Link>
                </button>
              </div>
            </div>
          </div>
          <p className="Loremipsum  w-80 text-3xl font-extrabold">
            {" "}
            घर बैठे खरीदारी कीजिए <br />{" "}
            <div className="text-red-700">मनोज किराना स्टोर</div>से।{" "}
          </p>
        </div>
   
    </div>
  );
};

export default OTO;
