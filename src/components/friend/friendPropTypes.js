import { shape, string, number } from "prop-types"

export default shape({
  name: shape({ first: string, last: string }),
  email: string,
  phone: string,
  location: shape({
    street: shape({
      name:string,
      number:number
    }),
    city: string,
    state: string,
    postcode: number
  }),
  picture: shape({
    large: string,
    medium: string
  })
})
