import renderDom from './components/render'
import { HelloOptions, getOptions } from './components/options'

export type HelloArgs = Partial<HelloOptions>

const hello = (...args: Array<HelloArgs>): void => {
    const options: HelloOptions = getOptions(args)
    console.log("hello options:",options)
    renderDom()
}

export default hello
