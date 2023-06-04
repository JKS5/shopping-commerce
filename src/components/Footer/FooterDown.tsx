import React from "react";

import Language from "./Language";
export default function FooterDown() {
  return (
    <section className="  border-t-[1px]">
      <div className="flex justify-between py-6 ">
        <div className="flex flex-col text-footer text-sm">
          <p className="p-1">© 2023 Asadal Wholesale, Inc.</p>
          <div className="flex p-1 ">
            <p className="px-1 ">Terms of Service</p>
            <p className="px-1">•</p>
            <p className="px-1">Privacy Policy </p>
            <p className="px-1">•</p>
            <p className="px-1">Cookie Policy </p>
            <p className="px-1">•</p>
            <p className="px-1">IP Policy </p>
            <p className="px-1">•</p>
            <p className="px-1">Sitemap</p>
          </div>
        </div>
        <div className="flex items-center">
          <Language />
        </div>
      </div>
    </section>
  );
}
