import { WebRTCConfig, IWebRTC } from '../../interfaces';
declare const instantiate: (passedConfig: WebRTCConfig, modules: {
    [k: string]: any;
}) => IWebRTC;
export default instantiate;
