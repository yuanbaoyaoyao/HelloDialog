import { getNode } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { CONTENT } = CLASS_NAMES;

export const triggerContent = (): void => {
    const contentContainer: HTMLElement = getNode(CONTENT)
}

export default triggerContent