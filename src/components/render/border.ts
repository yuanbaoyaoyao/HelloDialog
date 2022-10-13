import { BorderOptions } from '../options/border'
import { getNodeList } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'
import triggerBorder from '../triggers/border'

const renderBorder = (options: BorderOptions): void => {
    triggerBorder(options)
}

export default renderBorder