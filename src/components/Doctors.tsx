import * as React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Doctors = ({ data }: any) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
    >
      {data &&
        data.map((person: any, index: any) => (
          <li
            key={index}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.headshot.url}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3 mx-auto">
                  <span className="gap-2 items-center px-2 py-1 text-sm font-medium flex justify-start">
                    <PhoneIcon className="h-3 w-3" />
                    {person.mainPhone}
                  </span>
                </dd>
                <dd className="mt-3 mx-auto">
                  <span className="gap-2 items-center px-2 py-1 text-sm font-medium flex justify-start">
                    <MapPinIcon className="h-5 w-5" />
                    <div className="flex flex-col justify-start ">
                      <div>{person.address.line1}</div>
                      <div className="justify-start flex">
                        {person.address.city}, {person.address.region}{" "}
                        {person.address.postalCode}
                      </div>
                    </div>
                  </span>
                </dd>
                <dd className="mt-4">
                  <a href={person.slug}>
                    <div className="w-fit border py-2 px-4">Learn more</div>
                  </a>
                </dd>
              </dl>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default Doctors;
