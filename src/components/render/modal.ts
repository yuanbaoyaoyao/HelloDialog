import { border, bottom, content, header, modal, outermost } from "../dom";
import { ModalOptions } from '../options/modal'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import globalState from '../../store'

const { MODAL, OUTERMOST } = CLASS_NAMES;

const renderModal = (options: ModalOptions): void => {
    document.body.appendChild(outermost)
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.appendChild(modal)
    const modalContainer: HTMLElement = getNode(MODAL)
    modalContainer.appendChild(border)
    modalContainer.appendChild(header)
    modalContainer.appendChild(content)
    modalContainer.appendChild(bottom)
    initState(modalContainer)
}

const initState = (modalContainer: HTMLElement): void => {
    globalState.firstDomLeft = modalContainer.getBoundingClientRect().left;
    globalState.firstDomTop = modalContainer.getBoundingClientRect().top;
    globalState.firstDomWidth = modalContainer.getBoundingClientRect().width;
    globalState.firstDomHeight = modalContainer.getBoundingClientRect().height;
}

export default renderModal