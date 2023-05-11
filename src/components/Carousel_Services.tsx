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
              <>
                <div className="flex flex-col border p-4" key={index}>
                  <div className="h-24 text-bold flex justify-center items-center my-auto text-xl font-bold">
                    {item.name}
                  </div>
                  <div className="h-48 text-sm">{item.description}</div>
                  <a href={item.slug}>
                    <div className="mt-4 border p-4 bg-blue-300 text-white w-fit mx-auto">
                      Learn more
                    </div>
                  </a>
                </div>
              </>
            )
        )}
    </Slider>
  );
};

export default Carousel_Services;
