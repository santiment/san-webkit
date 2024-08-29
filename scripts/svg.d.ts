/**
 *
 * @param {string} filePath
 * @param {any} options
 * @param {string} [svg]
 * @returns {Promise<string>}
 */
export function getSvgSprite(filePath: string, options: any, svg?: string): Promise<string>;
/**
 *
 * @param {string} pathname
 * @param {string} value
 */
export function writeFile(pathname: string, value: string): Promise<any>;
/**
 *
 * @param {string} inputPath
 * @param {string} outputDir
 * @param {undefined | string} outputSpriteDir
 * @param {any} spriteOptions
 */
export function processSvgWithOutput(inputPath: string, outputDir: string, outputSpriteDir: undefined | string, spriteOptions: any, replacePath?: string): Promise<void>;
export function optimizeSvg(path: string): Promise<string>;
export namespace SPRITES_OPTIONS {
    namespace mode {
        namespace symbol {
            let example: boolean;
        }
    }
    namespace shape {
        let transform: {
            svgo: {
                plugins: any[];
            };
        }[];
    }
}
export namespace ILLUS_OPTIONS { }
