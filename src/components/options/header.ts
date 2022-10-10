export interface HeaderOptions {
    closeModal?: boolean
}

export const defaultHeaderOptions: HeaderOptions = {
    closeModal: true
}

export const getHeaderOptions = (options: object): HeaderOptions => {
    console.log("options:", options)
}

export default getHeaderOptions