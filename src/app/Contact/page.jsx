"use client";
import Submit from "./Action";
const Con = () => {
  async function handel(formData) {
    const response = await Submit({
      item1: formData.get("item1"),
      item2: formData.get("item2"),
      item3: formData.get("item3"),
      item4: formData.get("item4"),
      watsapp: formData.get("item5"),
    });
  }

  return (
    <div>
      <form action={handel}>
        <div
          className="iPhone14 Pro Max - 1 inline-flex flex-col space-y-8 items-center justify-start px-12 pt-12 pb-20 bg-yellow-400"
          style={{ width: 430, height: 932 }}
        >
          <div className="Group3 relative" style={{ width: 238, height: 52 }}>
           <img src="/Gr.png" alt="" />
          </div>
          <p className="ADDYOUR ITEMS text-xl text-red-900">आपने समानों की सूची बनाएं</p>
          <div className="Group2 flex flex-col space-y-10 items-center justify-end w-full">
            <input
              name="item1"
              className="Rectangle1    w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item2"
              className="Rectangle2   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item3"
              className="Rectangle3   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item4"
              className="Rectangle4   w-full h-14 bg-gray-300 shadow rounded-lg"
            />
            <input
              name="item5"
              placeholder="Enter your watsapp num"
              className="Rectangle5 w-full h-14 bg-gray-300 shadow rounded-lg  "
            />
            <button
              type="submit"
              className="Rectangle6 inline-flex items-center justify-center w-1/2 h-11 px-12 py-2 bg-red-700 bg-opacity-95 rounded-2xl"
            >
              <p className="SEND text-2xl font-extrabold text-white">SEND</p>
            </button>
          </div>
          <img
            className="🦆illustration _sitting man boy orange jacket_ 1 w-1/4 h-24"
            src="/sitt.png"
          />
        </div>
      </form>
    </div>
  );
};

export default Con;
