import { border, bottom, content, header, modal, outermost } from "../dom"
import { getNode, stringToNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import { stretchState } from '../../store'
import triggerModal from "../triggers/modal"
import { HelloOptions } from "../options"
import { defaultBorderOptions } from "../options/border"
import { defaultHeaderOptions } from "../options/header"
import { defaultContentOptions } from "../options/content"
import renderBorder from './border'
import renderBottom from './bottom'
import renderContent from './content'
import renderHeader from './header'

const { MODAL, OUTERMOST } = CLASS_NAMES

const renderModal = (options: HelloOptions): void => {
    const outermostNode = stringToNode(outermost)
    const modalNode = stringToNode(modal)
    const borderNode = stringToNode(border)
    const headerNode = stringToNode(header)
    const contentNode = stringToNode(content)
    const bottomNode = stringToNode(bottom)
    //解决只有一个弹窗的情况
    if (!document.body.getElementsByClassName(OUTERMOST).length) {
        document.body.appendChild(outermostNode);
    }
    const outermostContainer: HTMLElement = getNode(OUTERMOST)
    outermostContainer.textContent = ''
    outermostContainer.appendChild(modalNode)
    const modalContainer: HTMLElement = getNode(MODAL)

    if (options.border != defaultBorderOptions) {
        modalContainer.appendChild(borderNode)
        renderBorder(options.border)
    }
    if (options.header != defaultHeaderOptions) {
        modalContainer.appendChild(headerNode)
        renderHeader(options.header)
    }
    if (options.content != defaultContentOptions) {
        modalContainer.appendChild(contentNode)
        renderContent(options.content)
    }
    modalContainer.appendChild(bottomNode)
    renderBottom(options.bottom)
    initState(modalContainer);
    triggerModal(options.modal)
}

const initState = (modalContainer: HTMLElement): void => {
    stretchState.firstDomLeft = modalContainer.getBoundingClientRect().left;
    stretchState.firstDomTop = modalContainer.getBoundingClientRect().top;
    stretchState.firstDomWidth = modalContainer.getBoundingClientRect().width;
    stretchState.firstDomHeight = modalContainer.getBoundingClientRect().height;
}

export default renderModal