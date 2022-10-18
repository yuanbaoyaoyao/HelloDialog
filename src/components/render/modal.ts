import { border, bottom, content, header, modal, outermost } from "../dom";
import { ModalOptions } from '../options/modal'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import  {stretchState} from '../../store'

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
    stretchState.firstDomLeft = modalContainer.getBoundingClientRect().left;
    stretchState.firstDomTop = modalContainer.getBoundingClientRect().top;
    stretchState.firstDomWidth = modalContainer.getBoundingClientRect().width;
    stretchState.firstDomHeight = modalContainer.getBoundingClientRect().height;
}

export default renderModal