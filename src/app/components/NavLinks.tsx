import React, { useState } from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import links from "./DataNavLinks";

const NavLinks = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  /*const icon = (num) => {
    if (num == "Países") {
      return <RiBarChart2Line className="text-primary" />;
    }
    if (num == "Empresas") {

    }
  };*/

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div onClick={() => { title !== link.name ? setTitle(link.name) : setTitle(""); setSubTitle("") }} className="flex items-center justify-between px-3 text-left rounded-lg hover:bg-gray-900 transitions-colors">
            <span className="flex items-center gap-4">
              {link.icon}
              <h1 className="py-4">
                {link.name}
              </h1>
            </span>
            <span className="text-xl">
              <RiArrowRightSLine className={`mt-1 ${title === link.name && "rotate-90"} transition-all`} />
            </span>
          </div>
          <div className={`${title === link.name ? "" : "hidden"} transition-all`}>
            {link.sublinks1.map((sublink1, index1) => (
              <div key={index1}>
                <div onClick={() => subTitle !== sublink1.title ? setSubTitle(sublink1.title) : setSubTitle("")} className="flex items-center justify-between rounded-lg hover:bg-gray-900 transitions-colors">
                  <h1 className="py-4 pl-7">
                    {sublink1.title}
                  </h1>
                  <span className="text-xl pr-3">
                    <RiArrowRightSLine className={`mt-1 ${subTitle === sublink1.title && "rotate-90"} transition-all`} />
                  </span>
                </div>
                <div className={`${subTitle === sublink1.title ? "" : "hidden"} transition-all`}>
                  {sublink1.sublinks2.map((sublink2, index3) => (
                    <li key={index3} className="py-4 pl-14 block relative rounded-lg hover:bg-gray-900 transitions-colors">
                      <Link href={sublink2.link}>{sublink2.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;