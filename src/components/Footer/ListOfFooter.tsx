import React from "react";

interface Props {
  text: string;
  onClick: any;
  url: string;
}

export default function ListOfFooter({ text, onClick, url }: Props) {
  return (
    <li onClick={() => onClick(url)} className="cursor-pointer text-sm py-1">
      {text}
    </li>
  );
}
