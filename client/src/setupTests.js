const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const { JSDOM } = require("jsdom");

const { window } = new JSDOM();
global.window = window;
window.location.pathname = "/orgid=123_programid=123_batchid=123";
global.HTMLElement = window.HTMLElement;

global.fetch = require("jest-fetch-mock");

Enzyme.configure({ adapter: new Adapter() });
