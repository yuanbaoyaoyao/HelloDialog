import renderDom from './components/render'
import { HelloOptions, getOptions, defaultOptions } from './components/options'
import { actionPromiseState } from './store'

export type HelloArgs = Array<Partial<HelloOptions>> | Array<String>

const hello = (...args: HelloArgs) => {
    let options: HelloOptions;
    if (typeof (args) == 'string') {
    } else if (typeof (args) == 'object') {
        options = getOptions(args[0] as object)
    }
    return new Promise<any>((resolve, reject) => {
        actionPromiseState.resolve = resolve
        actionPromiseState.reject = reject
        renderDom(options)
    });
}

export default hello
