
import { HelloOptions } from '../options'
import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { CONTENT } = CLASS_NAMES;

const renderContent = (options: HelloOptions): void => {
    const contentContainer: Node = getNode(CONTENT)
    contentContainer.textContent = <string>options.content.text
    console.log("renderContent.options:", options)
}

export default renderContent