import CLASS_NAMES from '../classNames';
import { stringToNode } from '../../utils'

export const border: Node = stringToNode(
    `
    <div class="${CLASS_NAMES.BOTTOM_STRETCH}"></div>
    <div class="${CLASS_NAMES.RIGHT_STRETCH}"></div>
    <div class="${CLASS_NAMES.LEFT_STRETCH}"></div>
    <div class="${CLASS_NAMES.TOP_STRETCH}"></div>
    <div class="${CLASS_NAMES.TOP_RIGHT_STRETCH}"></div>
    <div class="${CLASS_NAMES.TOP_LEFT_STRETCH}"></div>
    <div class="${CLASS_NAMES.BOTTOM_RIGHT_STRETCH}"></div>
    <div class="${CLASS_NAMES.BOTTOM_LEFT_STRETCH}"></div>
    `
)