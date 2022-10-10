export interface ModalOptions {
    closeModal?: boolean
}

export const defaultModalOptions: ModalOptions = {
    closeModal: true
}

export const getModalOptions = (options: object): ModalOptions => {
    console.log("options:", options)
}

export default getModalOptions