"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const bts_1 = __importDefault(require("../bts"));
// beforeEach(() => {
//   jest.resetModules()
//   const doc = yaml.safeLoad(fs.readFileSync(__dirname + '/../action.yml', 'utf8'))
//   Object.keys(doc.inputs).forEach(name => {
//     const envVar = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`
//     process.env[envVar] = doc.inputs[name]['default']
//   })
// })
// afterEach(() => {
//   const doc = yaml.safeLoad(fs.readFileSync(__dirname + '/../action.yml', 'utf8'))
//   Object.keys(doc.inputs).forEach(name => {
//     const envVar = `INPUT_${name.replace(/ /g, '_').toUpperCase()}`
//     delete process.env[envVar]
//   })
// })
describe('debug action debug messages', () => {
    // it('outputs a debug message', async () => {
    //   const debugMock = jest.spyOn(core, 'debug')
    //   await run()
    //   expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌')
    // })
    // describe('debug action debug messages', () => {
    it('outputs a debug message', async () => {
        process.env['INPUT_AMAZING-CREATURE'] = 'person';
        const debugMock = jest.spyOn(core, 'debug');
        await (0, bts_1.default)();
        expect(debugMock).toHaveBeenCalledWith('👋 Hello! You are an amazing person! 🙌');
        delete process.env['INPUT_AMAZING-CREATURE'];
    });
});
