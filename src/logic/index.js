import axios from "axios"

const FRIEND_URL = "https://randomuser.me/api/?nat=es&exc=login"
/*

/!**
 *
 * @param string {string}
 * @param name {string}
 *!/
export const stringCheck = (string, name) => {
  if (!string) throw new Error(`${name} is missing`);
  if (typeof string !== "string")
    throw new Error(`${name} must be of type string`);
};
*/

/**
 *
 * @returns {Promise<{firstName: *, lastName: *, image: *, location: *, id: *, email: *}>}
 */
export const logicGetFriend = async () => {
  try {
    const results = await axios.get(FRIEND_URL)
    if (!results) throw new Error("No results returned from API")
    return results.data.results[0]
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 *
 * @param data {any}
 * @param index {string}
 * @returns {string}
 */
export const persistData = (data, index) => {
  let error = ""
  if (!data) return "Error in persisting storage: no data"
  if (!index || typeof index !== "string" || index.length === 0)
    return "Error in persisting storage: incorrect index"
  try {
    const stringified = JSON.stringify(data)
    localStorage.setItem(index, stringified)
    return error
  } catch (e) {
    return e.message
  }
}

/**
 *
 * @param index {string}
 * @returns {null|any}
 */
export const retrievePersistedData = index => {
  try {
    if (!index || typeof index !== "string" || index.length === 0) return null
    const stringified = localStorage.getItem(index)
    if (!stringified) return null
    return JSON.parse(stringified)
  } catch (e) {
    return null
  }
}
