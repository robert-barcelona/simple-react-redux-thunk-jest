
import {shape,string,number} from "prop-types"

export default {
  friend: shape({
    name: shape({ first: string, last: string }),
    email: string,
    phone: string,
    location: shape({
      street: string,
      city: string,
      state: string,
      postcode: number
    }),
    picture:shape({
      large:string,
      medium:string
    })
  })
};
