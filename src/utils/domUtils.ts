export const stringToNode = (html: String): Node => {
    let fragment = document.createRange().createContextualFragment(html);
    return fragment;
}

export const getNode = (className: String): HTMLElement => {
    const selector = `.${className}`
    return document.querySelector(selector) as HTMLElement
}

export const getNodeList = (classNameList: Array<String>): Array<HTMLElement> => {
    const selector = `.${classNameList}`
    let nodeList: Array<HTMLElement> = []
    for (let className of classNameList) {
        nodeList.push(getNode(className))
    }
    return nodeList
}