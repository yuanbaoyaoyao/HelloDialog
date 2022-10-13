
import { ContentOptions } from '../options/content'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { CONTENT } = CLASS_NAMES;

const renderContent = (options: string | object): void => {
    const contentContainer: Node = getNode(CONTENT)
    // contentContainer.textContent = <string>options.content.text
}

export default renderContent