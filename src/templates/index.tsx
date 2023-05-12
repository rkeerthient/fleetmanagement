/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { Image } from "@yext/pages/components";
import * as React from "react";
import PageLayout from "../components/page-layout";
import "../index.css";
import BookingBar from "../components/bookingBar";
import { insuranceImages, paymentToIcons } from "../components/icons";
import Doctors from "../components/Doctors";
import Carousel_Services from "../components/Carousel_Services";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "index-stream",
    filter: {
      entityIds: ["location"],
    }, // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "c_offeredServices.name",
      "c_offeredServices.description",
      "c_featuredServices.name",
      "c_featuredServices.description",
      "c_featuredServices.slug",
      "services",
      "timezone",
      "photoGallery",
      "paymentOptions",
      "insuranceAccepted",
      "c_relatedDoctors.name",
      "c_relatedDoctors.headshot",
      "c_relatedDoctors.mainPhone",
      "c_relatedDoctors.address",
      "c_relatedDoctors.degrees",
      "c_relatedDoctors.slug",
    ],
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `index.html`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    timezone,
    geocodedCoordinate,
    services,
    photoGallery,
    insuranceAccepted,
    description,
    c_featuredServices,
    c_offeredServices,
    paymentOptions,
    c_relatedDoctors,
  } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div>
          <div className="relative">
            {photoGallery && (
              <Image
                image={photoGallery[0]}
                style={{ height: "100vh-25px" }}
              ></Image>
            )}
            <div className="absolute right-40 top-1/4 w-1/4 border border-gray-600 border-b-4 p-4">
              <div className="font-semibold text-2xl mb-2">
                {name} <br /> {address.city}, {address.region}
              </div>
              <div className="text-lg"> {description}</div>
            </div>
          </div>
        </div>
        <div className="centered-container">
          <div className="section">
            <div className="my-8 font-base text-center text-3xl text-gray-600">
              Featured Services
            </div>
            <div className="grid grid-cols-3 gap-4">
              {c_featuredServices &&
                c_featuredServices.map(
                  (item: any, index: any) =>
                    item.description && (
                      <span key={index}>
                        <div className="flex flex-col border p-4">
                          <div className="h-24 text-bold flex justify-center items-center my-auto text-2xl font-base text-gray-600">
                            {item.name}
                          </div>
                          <div className="text-gray-500">
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
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {paymentOptions && (
                <div className="flex flex-col">
                  <div className="my-8 font-base text-center text-3xl text-gray-600">
                    Payments options
                  </div>
                  <div className="flex flex-row flex-wrap gap-16 border-r-2">
                    {paymentOptions.map((item: any, index: any) => (
                      <div key={index} className="flex flex-col text-center">
                        <div className="mx-auto">
                          {paymentToIcons[item.toUpperCase()]}
                        </div>
                        <div className="text-xs font-medium mt-4">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {insuranceAccepted && (
                <div className="flex flex-col">
                  <div className="my-8 font-base text-center text-3xl text-gray-600">
                    Insurance accepted
                  </div>
                  <div className="flex flex-row flex-wrap gap-8">
                    {insuranceAccepted.map((item: any, index: any) => (
                      <div
                        key={index}
                        className="flex flex-col flex-wrap text-center p-4 my-auto"
                      >
                        <div
                          className="mx-auto my-auto flex items-center"
                          style={{ minHeight: "70px" }}
                        >
                          <img
                            style={{ maxHeight: "70px" }}
                            src={insuranceImages[item]}
                            alt=""
                            className="w-24"
                          />
                        </div>
                        <div className="mt-4 text-sm font-medium">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-8">
              <div className="my-8 font-base text-center text-3xl text-gray-600">
                Meet our doctors
              </div>
              <Doctors data={c_relatedDoctors}></Doctors>
            </div>
          </div>
        </div>
        <div>
          <div className="my-8 font-base text-center text-3xl text-gray-600">
            Services offered
          </div>
          <Carousel_Services data={c_offeredServices}></Carousel_Services>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;
