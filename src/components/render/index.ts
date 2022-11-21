import renderBackdrop from './backdrop'
import renderModal from './modal'
// import renderBorder from './border'
// import renderBottom from './bottom'
// import renderContent from './content'
// import renderHeader from './header'
// import renderIcons from './icons'
import { HelloOptions } from '../options'

const renderDom = (options: HelloOptions): void => {
    renderModal(options)
    renderBackdrop(options.backdrop)
    // renderHeader(options.header)
    // renderBorder(options.border)
    // renderContent(options.content)
    // renderBottom(options.bottom)
    // renderIcons(options.icon)
}

export default renderDom