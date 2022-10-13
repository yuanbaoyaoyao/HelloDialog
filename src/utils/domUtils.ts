export const stringToNode = (html: string): Node => {
    let fragment = document.createRange().createContextualFragment(html);
    return fragment;
}

export const getNode = (className: string): HTMLElement => {
    const selector = `.${className}`
    return document.querySelector(selector) as HTMLElement
}

export const getNodeList = (classNameList: Array<string>): Array<HTMLElement> => {
    const selector = `.${classNameList}`
    let nodeList: Array<HTMLElement> = []
    for (let className of classNameList) {
        nodeList.push(getNode(className))
    }
    return nodeList
}