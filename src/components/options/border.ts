export interface BorderOptions {
    enable?: boolean,
    selected?: string | Array<string> | null
}

export const defaultBorderOptions: BorderOptions = {
    enable: true,
    selected: null
}

export const getBorderOptions = (options: object): BorderOptions => {
    console.log("options:", options)
}

export default getBorderOptions