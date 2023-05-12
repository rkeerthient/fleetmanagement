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
            className="col-span-1 flex flex-col divide-y rounded-lg bg-white text-center grayscale hover:grayscale-0 hover:cursor-pointer"
          >
            <div className="flex flex-1 flex-col p-8">
              <a href={person.slug}>
                <img
                  className="transform transition duration-500 ease-in-out mx-auto flex-shrink-0 rounded-full hover:scale-75"
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

                  <dd className="mt-4">
                    <div className="mt-4 border rounded-full py-2 px-4 bg-gray-600 text-white w-fit mx-auto hover:bg-white hover:text-gray-600 hover:border-gray-600">
                      Learn more
                    </div>
                  </dd>
                </dl>
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default Doctors;
