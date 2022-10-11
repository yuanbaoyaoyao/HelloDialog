import renderDom from './components/render'
import { HelloOptions, getOptions } from './components/options'

export type HelloArgs = Partial<HelloOptions>

const hello = (args: HelloArgs): void => {
    const options: HelloOptions = getOptions(args)
    renderDom(options)
}

export default hello
