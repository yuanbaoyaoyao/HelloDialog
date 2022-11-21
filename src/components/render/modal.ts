import { border, bottom, content, header, modal, outermost } from "../dom"
import { ModalOptions } from '../options/modal'
import { getNode, stringToNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { stretchState } from '../../store'
import triggerModal from "../triggers/modal"

const { MODAL, OUTERMOST } = CLASS_NAMES

const renderModal = (options: ModalOptions): void => {
    const outermostNode = stringToNode(outermost)
    const modalNode = stringToNode(modal)
    const borderNode = stringToNode(border)
    const headerNode = stringToNode(header)
    const contentNode = stringToNode(content)
    const bottomNode = stringToNode(bottom)
    //解决只有一个弹窗的情况
    if (!document.body.getElementsByClassName(OUTERMOST).length) {
        console.log("触发了")
        document.body.appendChild(outermostNode);
    }
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.textContent = ''
    outermostContainer.appendChild(modalNode)
    const modalContainer: HTMLElement = getNode(MODAL)
    modalContainer.appendChild(borderNode)
    modalContainer.appendChild(headerNode)
    modalContainer.appendChild(contentNode)
    modalContainer.appendChild(bottomNode)
    initState(modalContainer);
    triggerModal(options)
}

const initState = (modalContainer: HTMLElement): void => {
    stretchState.firstDomLeft = modalContainer.getBoundingClientRect().left;
    stretchState.firstDomTop = modalContainer.getBoundingClientRect().top;
    stretchState.firstDomWidth = modalContainer.getBoundingClientRect().width;
    stretchState.firstDomHeight = modalContainer.getBoundingClientRect().height;
}

export default renderModal