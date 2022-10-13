export interface backgroundOptions {
    picUrl?: string | null
    color?: string | null
    picRepeat?: string | null
    picSize?: string | null
    picPosition?: string | null
}

export const defaultBackgroundOptions: backgroundOptions = {
    picUrl: null,
    color: null,
    picRepeat: null,
    picSize: null,
    picPosition: null
}