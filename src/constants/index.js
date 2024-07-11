import axios from "axios";
import { isLocalStorageAvailable } from "@/utils";

const userProfile = "/Profiles";
const dserverDomain = "http://localhost:8000/api";
const serverApiDomain = "https://api.photokrafft.com/api";

export const appRoutes = {
  Home: "/",
  Products: "/products",
  AboutUS: "/About-US",
  Support: "/Faqs",
  StartPrinting: "/Start-Printing",
  CreateAccount: "/Create-Account",
  Login: "/Login",
  forgetPassword: "/forget-password",
  services: "/Services",
  servicesDropDown: {
    design: "/Services/design",
    printing: "/Services/printing",
    binding: "/Services/binding",
  },
  // users Profiles Routes
  userProfile: userProfile,
  userProfileOrders: `${userProfile}/orders`,

  // checkout routes
  checkout: "check-out",
};

export const apiRoutes = {
  // auth routes
  login: serverApiDomain + "/auth/customer/login",
  register: serverApiDomain + "/auth/customer/register",
  token: serverApiDomain + "/auth/customer/token",
  products: serverApiDomain + "/product",
  orders: serverApiDomain + "/order",
  uploadfile: serverApiDomain + "/order/uploadfile",
  zones: serverApiDomain + "/zones",
  user: serverApiDomain + "/user",
  checkout: serverApiDomain + "/checkout",
  updateAvtar: serverApiDomain + "customer/change-avtar/",
  customer: serverApiDomain + "/customer/",
  forgetPassword: serverApiDomain + "/auth/customer/forget-password/",
};

export const localstorageKey = {
  authKey: "authKey",
  authStatus: "authStatus",
  user: "user",
  zone: "zone",
  coverphoto: "coverphoto",
};

export const errorText = {};
export const productFormStep = {
  product: "select_product",
  orientation: "select_orientation",
  papper: "select_papers",
  cover: "select_cover",
  event: "select_event",
  boxsleeve: "select_boxsleeve",
};

const userKey = isLocalStorageAvailable()
  ? localStorage.getItem(localstorageKey.authKey)
  : null;

export const appAxios = axios.create({
  headers: {
    Authorization: userKey,
  },
});

export const secretTokken = {
  dropbox: "",
};

// Call the refreshAccessToken function with your refresh token
// export const token = refreshAccessToken(refreshToken);
