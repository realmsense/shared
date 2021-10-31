import * as dotenv from "dotenv";
import { _GetEnvObject } from "./environment.model";

dotenv.config();

const ENV = _GetEnvObject();
export { ENV };