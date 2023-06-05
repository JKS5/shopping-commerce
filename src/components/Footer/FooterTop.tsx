import React from "react";
import ListOfFooter from "./ListOfFooter";

export default function FooterTop() {
  const clickMe = (url: any) => {
    window.open(url, "_blank");
  };
  return (
    <section className="flex  justify-between py-20 px-16 text-brand">
      <div>
        <ul className="flex text-bs ">
          <li className="pr-9">
            <p className="font-medium pb-1">Compnay</p>
            <ul>
              <ListOfFooter
                text={"About Us"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Newsroom"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Careers"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Partnerships"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
            </ul>
          </li>
          <li className="pr-9">
            <p className="font-medium pb-1">Supoort</p>
            <ul>
              <ListOfFooter
                text={"Help Center"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Cavill Markets"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Sell on Cavill"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
            </ul>
          </li>
          <li className="pr-9">
            <p className="font-medium pb-1">Connect</p>
            <ul>
              <ListOfFooter
                text={"Blog"}
                onClick={clickMe}
                url={"https://naver.com"}
              />
              <ListOfFooter
                text={"Instagram"}
                onClick={clickMe}
                url={"https://www.instagram.com/leomessi/"}
              />
              <ListOfFooter
                text={"Facebook"}
                onClick={clickMe}
                url={"https://www.facebook.com/zuck/"}
              />
              <ListOfFooter
                text={"Twitter"}
                onClick={clickMe}
                url={"https://twitter.com/elonmusk"}
              />
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h4>Get the Cavill app</h4>
        <div></div>
        Shop on the go, message brands, and track orders with the Cavill app.
        <div className="flex">
          <img
            src="/images/Footer/Apple-store-en.svg"
            alt="appleAppStore"
            className="w-36 cursor-pointer"
            onClick={() => clickMe("https://www.apple.com/kr/macbook-air/")}
          />
          <img
            src="/images/Footer/Google-play-en.webp"
            alt="GoogleAppStore"
            className="w-44  cursor-pointer"
            onClick={() =>
              clickMe("https://store.google.com/us/category/phones?hl=en-US")
            }
          />
        </div>
      </div>
    </section>
  );
}
