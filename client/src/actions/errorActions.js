import { GET_ERRORS } from "./types";

export const setErrors = error => {
   return {
      type: GET_ERRORS,
      payload: error
   };
};

export const clearErrors = () => {
   return {
      type: GET_ERRORS,
      payload: {}
   };
};
