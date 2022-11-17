import { ContentOptions } from '../options/content'
import triggerContent from '../triggers/content'
import CLASS_NAMES from '../classNames'
import { getNode } from '../../utils/domUtils'

const { CONTENT } = CLASS_NAMES

const renderContent = (options: ContentOptions): void => {
    // const modalContainer: HTMLElement = getNode(CONTENT)
    // modalContainer.prepend(icons)
    triggerContent(options)
}

export default renderContent