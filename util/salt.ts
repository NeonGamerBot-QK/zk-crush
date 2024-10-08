// the defined salt for the session 
import { genSaltSync } from "bcrypt";
//@ts-ignore
export default globalThis.salt = genSaltSync(10);