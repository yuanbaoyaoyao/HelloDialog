import { ContentOptions } from '../options/content'
import triggerContent from '../triggers/content'

const renderContent = (options: ContentOptions): void => {
    triggerContent(options)
}

export default renderContent