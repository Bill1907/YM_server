"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
exports.default = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield puppeteer_1.default.launch({
            headless: false,
            args: [`--window-size=1920,1080`],
            defaultViewport: {
                width: 1920,
                height: 1080
            }
        });
        const page = yield browser.newPage();
        yield page.goto(url, { waitUntil: 'networkidle2' });
        const body = yield page.$('body');
        const html = yield page.evaluate(body => body === null || body === void 0 ? void 0 : body.innerHTML, body);
        console.log(html);
    }
    catch (err) {
        let message = 'UnKnown Error';
        if (err instanceof Error)
            message = err.message;
        return message;
    }
});
