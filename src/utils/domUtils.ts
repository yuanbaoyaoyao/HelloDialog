export const stringToNode = (html: string): Node => {
    let fragment = document.createRange().createContextualFragment(html);
    return fragment;
}

export const getNode = (className: string): HTMLElement => {
    const selector = `.${className}`
    return document.querySelector(selector) as HTMLElement
}