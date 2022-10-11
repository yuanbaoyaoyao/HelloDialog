import renderBackdrop from './backdrop'
import renderModal from './modal'
import renderBorder from './border'
import renderBottom from './bottom'
import renderContent from './content'
import renderHeader from './header'
import triggerAll from '../triggers'
import { HelloOptions } from '../options'

const renderDom = (options: HelloOptions): void => {
    renderBackdrop(options)
    renderModal(options)
    renderHeader(options)
    renderBorder(options)
    renderContent(options)
    renderBottom(options)
    triggerAll()
}

export default renderDom