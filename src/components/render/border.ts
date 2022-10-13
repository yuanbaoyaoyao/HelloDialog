import { border } from "../dom";
import { BorderOptions } from '../options/border'
import { getNodeList } from '../../utils/domUtils'
import CLASS_NAMES from '../classNames'

const { RIGHT_STRETCH, TOP_STRETCH, BOTTOM_STRETCH, LEFT_STRETCH, TOP_RIGHT_STRETCH, TOP_LEFT_STRETCH, BOTTOM_RIGHT_STRETCH, BOTTOM_LEFT_STRETCH } = CLASS_NAMES;

const renderBorder = (options: BorderOptions): void => {

    const borderContainer: Array<HTMLElement> = getNodeList([RIGHT_STRETCH, TOP_STRETCH, BOTTOM_STRETCH, LEFT_STRETCH, TOP_RIGHT_STRETCH, TOP_LEFT_STRETCH, BOTTOM_RIGHT_STRETCH, BOTTOM_LEFT_STRETCH])
    // console.log("renderBorderOptions:", options)
    handleOptions(borderContainer, options)
}

const handleOptions = (borderContainer: Array<HTMLElement>, options: BorderOptions) => {
    console.log("borderContainer:", borderContainer)
    // if (!options.enable) {
    //     // borderContainer.remove()
    // }
}

export default renderBorder