export interface BottomOptions {
    closeModal?: boolean
}

export const defaultBottomOptions: BottomOptions = {
    closeModal: true
}

export const getBottomOptions = (options: object): BottomOptions => {
    console.log("options:", options)
}

export default getBottomOptions