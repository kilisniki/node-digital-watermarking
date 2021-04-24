import Jimp from "jimp/*";

declare class DigitalWatermarking {
    static transformImageWithText(
        srcFileName:string,watermarkText:string,
        enCodeFileName:string, config: TransformConfig
    ):Promise<Jimp>;
    static transformImageBufferWithText(srcBuffer:Buffer,watermarkText:string,config: TransformConfig):Promise<Jimp>;
    static getTextFormImage(enCodeFileName:string,deCodeFileName:string):Promise<Jimp>;
    static getTextFormImageBuffer(enCodeBuffer:Buffer):Promise<Jimp>;
}
export function transformImageWithText(
    srcFileName:string,watermarkText:string,
    enCodeFileName:string, config: TransformConfig
):Promise<Jimp>;

export function transformImageBufferWithText(srcBuffer:Buffer,watermarkText:string,config: TransformConfig):Promise<Jimp>;

export function getTextFormImage(enCodeFileName:string,deCodeFileName:string):Promise<Jimp>;

export function getTextFormImageBuffer(enCodeBuffer:Buffer):Promise<Jimp>;

export type TransformConfig = {
    fontSize: number,
    thickness: number,
    resultImageWidth?: number,
    resultImageHeight?: number,
    resultImageQuality?: number,
    startX?: number,
    startY?: number
}