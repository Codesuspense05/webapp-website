import React, { useState } from "react";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-y-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-y-20" },
    { name: "Message", icon: "chatbubble-outline", dis: "translate-y-40" },
    { name: "Photos", icon: "camera-outline", dis: "translate-y-66" },
    { name: "Settings", icon: "settings-outline", dis: "translate-y-72" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className=" w-full bg-transparent h-[55vh] px-9 rounded-t-xl 800px:hidden">
      <ul className="">
        <span
          className={`bg-blue-500 duration-500 ${Menus[active].dis} border-2 border-gray-600 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <anchor
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </anchor>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;