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
import * as React from "react";
import PageLayout from "../components/page-layout";
import "../index.css";
import { Image } from "@yext/pages/components";
import {
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/solid";
import Hours from "../components/hours";
import RTF from "../components/RTF";
import Carousel_Locations from "../components/Carousel_Locations";
import StaticMap from "../components/static-map";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-2",
    filter: {
      entityTypes: ["healthcareProfessional"],
      // entityIds: ["emmy-estenoz"],
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
      "geocodedCoordinate.latitude",
      "geocodedCoordinate.longitude",
      "services",
      "timezone",
      "photoGallery",
      "headshot",
      "degrees",
      "acceptingNewPatients",
      "c_richTextDescription",
      "c_relatedFacilities.name",
      "c_relatedFacilities.logo",
      "c_relatedFacilities.address",
      "c_relatedFacilities.hours",
      "c_relatedFacilities.timezone",
      "c_relatedFacilities.mainPhone",
      "c_relatedFacilities.slug",
      "c_relatedFacilities.c_featuredServices.name",
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
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
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
const Professional: Template<TemplateRenderProps> = ({
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
    description,
    headshot,
    c_richTextDescription,
    c_relatedFacilities,
    acceptingNewPatients,
  } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="centered-container">
          <div className="section">
            {geocodedCoordinate && (
              <StaticMap
                latitude={geocodedCoordinate.latitude}
                longitude={geocodedCoordinate.longitude}
              ></StaticMap>
            )}
            <div className="grid grid-cols-3 px-4 mt-6">
              <div className="w-2/3 h-1/2">
                {headshot && <Image image={headshot} />}
              </div>
              <div>
                <dd className="mt-3 mx-auto font-bold text-xl">{name}</dd>
                <dd className="mt-2 mx-auto">
                  <span className="gap-2 items-center px-2 py-1 font-medium flex justify-start">
                    <PhoneIcon className="h-3 w-3" />
                    {mainPhone}
                  </span>
                </dd>
                <dd className="mt-2 mx-auto">
                  <span className="gap-2 items-center px-2 py-1 font-medium flex justify-start">
                    <MapPinIcon className="h-5 w-5" />
                    <div className="flex flex-col justify-start ">
                      <div>{address.line1}</div>
                      <div className="justify-start flex">
                        {address.city}, {address.region} {address.postalCode}
                      </div>
                    </div>
                  </span>
                </dd>
                <dd className="mt-8 mx-auto">
                  <span className="gap-2 items-center pr-2 py-1 font-medium flex justify-start">
                    <div className="flex flex-col justify-start ">
                      Accepting New Patients
                    </div>
                    {acceptingNewPatients ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    ) : (
                      <NoSymbolIcon className="h-6 w-6 text-red-600" />
                    )}
                  </span>
                </dd>
              </div>
              {hours && (
                <div>
                  <Hours hours={hours} title="Operational Hours"></Hours>
                </div>
              )}
            </div>
            {c_richTextDescription && (
              <div className="mt-4">
                <div className="my-4 text-3xl font-bold">About me:</div>
                <RTF>{c_richTextDescription}</RTF>
              </div>
            )}
            {c_relatedFacilities && (
              <div className="mt-4">
                <div className="my-4 text-3xl font-bold">Locations</div>
                <Carousel_Locations
                  data={c_relatedFacilities}
                ></Carousel_Locations>
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Professional;
