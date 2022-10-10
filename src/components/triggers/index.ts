import triggerBackdrop from './backdrop'
import triggerBorder from './border'
import triggerBottom from './bottom'
import triggerContent from './content'
import triggerHeader from './header'
import triggerModal from './modal'
const triggerAll = (): void => {
    triggerBackdrop()
    triggerBorder()
    triggerBottom()
    triggerContent()
    triggerHeader()
    triggerModal()
}

export default triggerAll