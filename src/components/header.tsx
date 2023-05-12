import * as React from "react";
import Cta from "../components/cta";
import { Image } from "@yext/pages/components";
import BookingBar from "./bookingBar";
import hours from "./hours";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = ({ _site }: any) => {
  const { c_logoURL, c_header, name, c_relatedFacility } = _site;
  const linkDoms = c_header.map((link: any) => (
    <div
      key={link.label}
      className="px-4 py-2 border-2 border-white hover:rounded-full hover:border-2 hover:border-gray-500"
    >
      <a href={link.uRL} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <img
            src={c_logoURL}
            alt=""
            className="w-32 h-auto  "
            style={{
              filter:
                "invert(47%) sepia(2%) saturate(3354%) hue-rotate(167deg) brightness(103%) contrast(73%)",
            }}
          />
          <div className="flex gap-x-10 text-lg font-base">{linkDoms}</div>
        </nav>
      </div>
      <BookingBar
        address={c_relatedFacility[0].address}
        mainPhone={c_relatedFacility[0].mainPhone}
        hours={c_relatedFacility[0].hours}
        timezone={c_relatedFacility[0].timezone}
      ></BookingBar>
    </>
  );
};

export default Header;
