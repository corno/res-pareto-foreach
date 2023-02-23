import * as pd from 'pareto-core-dev'
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as mapi from "../api"
import * as mtst from "lib-pareto-test"
import * as mpub from "../../../../../pub"

// import * as pubTypes from "../../../../pub/dist/submodules/public"
// import * as pubPrivate from "../../../../pub/dist/submodules/private"

export const $$: mapi.CgetTestSet = ($) => {


    // pub.$a.createTestProgram(null, {
    //     getTestSet: () => {
    //         pl.panic("@@@")
    //     },
    //     log: () => {

    //     },
    //     logError: () => {

    //     },
    //     onTestErrors: () => {

    //     },
    // })

    // pub.$b.createTestProgram(
    //     {
    //         getTestSet: ($) => {
    //             return pa.asyncValue({
    //                 elements: pr.wrapRawDictionary({})
    //             })
    //         },
    //         log: ($) => {
    //             pl.logDebugMessage($)
    //         }
    //     }
    // )(
    //     pr.wrapRawArray(["foo"])
    // )

    const builder = ps.createUnsafeDictionaryBuilder<mtst.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }


    //test that a failing test indeed fails!!! now it will make the program exit with an error code
    pd.logDebugMessage("FIXME: TEST THE LIB")
    createTest(
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
    )

    return pa.asyncValue(null).map(() => {
        return pa.asyncValue({
            elements: builder.getDictionary()
        })
    })
}