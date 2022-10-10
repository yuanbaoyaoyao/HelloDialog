import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { BACKDROP } = CLASS_NAMES;

export const triggerBackdrop = (): void => {
    const backdropContainer: HTMLElement = getNode(BACKDROP)
    // backdropContainer.addEventListener('click',()=>{
    //     backdropContainer.remove()
    // })
}

export default triggerBackdrop