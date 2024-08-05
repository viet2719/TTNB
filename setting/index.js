import development from "./settings-development.js";
import production from "./settings-production.js";

const settings = {
    development,
    production,
}[process.env.NODE_ENV];

export default settings;
