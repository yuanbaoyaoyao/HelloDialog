import renderDom from './components/render'
import { HelloOptions, getOptions } from './components/options'
import { actionPromiseState, isModalClosed } from './store'

export type HelloArgs = Partial<HelloOptions>

const hello = (args: HelloArgs) => {
    const options: HelloOptions = getOptions(args)

    return new Promise<any>((resolve, reject) => {
        actionPromiseState.resolve = resolve
        actionPromiseState.reject = reject
        renderDom(options)
    });
}

export default hello
