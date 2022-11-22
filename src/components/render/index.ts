import renderBackdrop from './backdrop'
import renderModal from './modal'
import { HelloOptions } from '../options'

const renderDom = (options: HelloOptions): void => {
    renderModal(options)
    renderBackdrop(options.backdrop)
}

export default renderDom