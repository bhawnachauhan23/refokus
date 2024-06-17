import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32 ">
        <div className="basis-1/2 text-[12.5rem] font-semibold leading-none tracking-tight">
          refokus.
        </div>
        <div className="basis-1/2 flex gap-1 ">
          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-2 text-sm text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-8 text-zinc-500">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a key={index} className="block mt-2 text-sm text-zinc-400">
                {item}
              </a>
            ))}
          </div>
          <div className="w-80 flex flex-col items-end">
            <p className="text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology
            </p>
            <img
              className="w-36 mt-16"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-6 mt-6 pb-6">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Term",
          "Webflow Agency",
        ].map((item, index) => (
          <h3 key={index} className="text-zinc-600 text-sm">
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Footer;
