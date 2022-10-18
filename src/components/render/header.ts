import { HeaderOptions } from '../options/header'
import triggerHeader from '../triggers/header'

const renderHeader = (options: HeaderOptions): void => {
    triggerHeader(options)
}

export default renderHeader