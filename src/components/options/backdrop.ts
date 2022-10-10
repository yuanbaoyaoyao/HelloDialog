export interface BackdropOptions {
    closeModal?: boolean
}

export const defaultBackdropOptions: BackdropOptions = {
    closeModal: true
}

export const getBackdropOptions = (options: object): BackdropOptions => {
    console.log("options:", options)
}

export default getBackdropOptions