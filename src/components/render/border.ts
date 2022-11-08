import { BorderOptions } from '../options/border'
import triggerBorder from '../triggers/border'

const renderBorder = (options: BorderOptions): void => {
    triggerBorder(options)
}

export default renderBorder