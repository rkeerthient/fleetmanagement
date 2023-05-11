import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@yext/pages/components";
import HoursText from "./HoursText";

const Carousel_Locations = (props: any) => {
  const { data } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data &&
        data.map((item: any, index: any) => (
          <div key={index} className="p-4 border flex flex-row ">
            <div className="textClass flex-col flex justify-between leading-6 font-normal">
              <div className=" text-left text-sm">
                <div className="flex flex-col h-28">
                  {item.logo && (
                    <Image image={item.logo} className="!w-16"></Image>
                  )}{" "}
                  <div className="mt-4 font-semibold ">
                    {item.name.toUpperCase()}
                  </div>
                </div>

                <div className="mt-4">
                  <div>{item.address.line1}</div>
                  <div>
                    {item.address.city}, {item.address.region} -{" "}
                    {item.address.postalCode}
                  </div>
                  <div className="underline hover:cursor-pointer">
                    {item.mainPhone &&
                      item.mainPhone
                        .replace("+1", "")
                        .replace(/\D+/g, "")
                        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                  </div>
                  {item.c_featuredServices && (
                    <>
                      <div className="font-semibold mt-4">
                        Featured Services
                      </div>
                      <ul className="servList mt-2 flex flex-col">
                        {item.c_featuredServices.map(
                          (nItem: any, index: number) => (
                            <li key={index}>{nItem.name}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </div>
                <div className="mt-4">
                  {
                    <HoursText
                      hours={item.hours}
                      timezone={item.timezone}
                      style="text-sm"
                    ></HoursText>
                  }
                </div>
                <div className="mt-4 text-center px-4 py-2 border">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default Carousel_Locations;
