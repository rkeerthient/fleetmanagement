import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel_Services = (props: any) => {
  const { data } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        data.map(
          (item: any, index: any) =>
            item.description && (
              <span key={index}>
                <div className="flex flex-col border p-4">
                  <div className="h-24 text-bold flex justify-center items-center my-auto text-2xl font-base text-gray-600">
                    {item.name}
                  </div>
                  <div className="h-48 text-sm text-gray-600">
                    {item.description}
                  </div>
                  <a href={item.slug}>
                    <div className="mt-4 border rounded-full py-2 px-4 bg-gray-600 text-white w-fit mx-auto hover:bg-white hover:text-gray-600 hover:border-gray-600">
                      Read more
                    </div>
                  </a>
                </div>
              </span>
            )
        )}
    </Slider>
  );
};

export default Carousel_Services;
