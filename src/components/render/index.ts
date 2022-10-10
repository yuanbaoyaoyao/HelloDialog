import renderBackdrop from './backdrop'
import renderModal from './modal'
import renderBorder from './border'
import renderBottom from './bottom'
import renderContent from './content'
import renderHeader from './header'
import triggerAll from '../triggers'
import { HelloOptions } from '../options'

const renderDom = (options: HelloOptions): void => {
    renderBackdrop()
    renderModal()
    renderHeader()
    renderBorder()
    renderContent(options)
    renderBottom()
    triggerAll()
}

export default renderDom