import {
  FaCcAmex,
  FaGooglePay,
  FaApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { SiSamsungpay } from "react-icons/si";
import * as React from "react";

export const paymentToIcons: any = {
  AMERICANEXPRESS: <FaCcAmex size={75} color="gray" />,
  ANDROIDPAY: <FaGooglePay size={75} color="gray" />,
  APPLEPAY: <FaApplePay size={75} color="gray" />,
  CASH: <BsCash size={75} color="gray" />,
  DISCOVER: <FaCcDiscover size={75} color="gray" />,
  FINANCING: <GiPayMoney size={75} color="gray" />,
  MASTERCARD: <FaCcMastercard size={75} color="gray" />,
  SAMSUNGPAY: <SiSamsungpay size={75} color="gray" />,
  VISA: <FaCcVisa size={75} color="gray" />,
};

export const insuranceImages: any = {
  "Delta Dental":
    "https://www.deltadental.com/content/dam/ddpa/us/en/logo/logo-ddpa-green.png",
  "Premier Dental":
    "https://www.premierdentalco.com/wp-content/uploads/2023/02/110-year-logo_website-header_lg-tagline_2x.png",
  Cigna: "https://www.cigna.com/static/www-cigna-com/images/cigna-logo.svg",
  MetLife:
    "https://www.metlife.com/content/dam/metlifecom/us/icons-header/MetLife.png",
  Humana:
    "https://assets.humana.com/is/image/humana/2022_Humana_Logo_RGB_Contrast-Green_No-R_No-Pad_Horiz-1?fmt=png-alpha",
  Aetna:
    "https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg",
  "Blue Cross Blue Shield":
    "https://www.bcbs.com/themes/custom/bcbs/img/full-logo.svg",
  Careington: "https://www1.careington.com/src/img/logos/ci-logo-dark.png",
  Ameritas:
    "https://marvel-b1-cdn.bc0a.com/f00000000142088/www.ameritas.com/wp-content/uploads/2021/07/logo_header_@2x.png",
  "United Health Care":
    "https://www.uhc.com/content/dam/uhcdotcom/website-assets/U-mark-blue.svg",
  "United Healthcare":
    "https://www.uhc.com/content/dam/uhcdotcom/website-assets/U-mark-blue.svg",
  "United Concordia":
    "https://www.unitedconcordia.com/content/dam/ucd/en/commercial/website/images/logos/ucd-logo.png",
  Guardian: "https://www.guardianlife.com/logo-dark.svg",
  Ethereum:
    "https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg",
};
