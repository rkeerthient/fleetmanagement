import { Address, Hours } from "@yext/search-headless-react";
import * as React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import HoursText from "./HoursText";
type bookingBarProps = {
  address: Address;
  mainPhone: string;
  emailAddress?: string;
  hours: Hours;
  timezone: string;
};

function BookingBar(props: bookingBarProps) {
  const { address, mainPhone, emailAddress, hours, timezone } = props;
  return (
    <div className="flex flex-row px-36 justify-between">
      <div className="items-center flex flex-row gap-4">
        <div>
          <CiLocationOn />
        </div>
        <div className="flex flex-col">
          <div>{address.line1}</div>
          <div className="text-gray-400">
            {address.city}, {address.region} {address.postalCode}
          </div>
        </div>
      </div>
      <div className="items-center flex flex-row gap-4">
        <div>
          <BsFillPhoneFill />
        </div>
        <div className="flex flex-col">
          <div>{mainPhone}</div>
          <div className="text-gray-400">Call us today!</div>
        </div>
      </div>
      <div className="items-center flex flex-row gap-4">
        <div>
          <BiTime />
        </div>
        <div className="flex flex-col">
          <div>Opening Hours</div>
          <div>
            <HoursText hours={hours} timeZone={timezone} />
          </div>
        </div>
      </div>
      <div className="items-center flex flex-row gap-4">
        <div>
          <AiOutlineCalendar />
        </div>
        <div className="flex flex-col">
          <div>Book Appointment</div>
          <div className="text-gray-400">email@email.com</div>
        </div>
      </div>
    </div>
  );
}

export default BookingBar;
