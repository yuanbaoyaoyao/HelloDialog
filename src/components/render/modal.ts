import { border, bottom, content, header } from "../dom";
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import globalState from '../../store'

const { MODAL } = CLASS_NAMES;

const renderModal = (): void => {
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