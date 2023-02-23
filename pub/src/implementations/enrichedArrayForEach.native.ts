import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

export const $$: mapi.CenrichedArrayForEach = ($, $i) => {
    let length = $.__getLength()

    if (length === 0) {
        $i.onEmpty()
    } else {
        $i.onNotEmpty(($i) => {
            let current = 0
            $.__forEach(($) => {
                $i({
                    isFirst: current === 0,
                    isLast: current === length - 1,
                    value: $,
                })
                current += 1
            })
        })
    }
}