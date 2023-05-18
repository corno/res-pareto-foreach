import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.enrichedDictionaryForEach = ($d) => {
    return ($, $i) => {
        let length = pi.cc($, () => {
            let count = 0
            $.__forEach(() => false, () => {
                count +=1
            })
            return count
        })
        if (length === 0) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let current = 0
                $.__forEach((a, b) => $d.compare({ a: a, b: b }), ($, key) => {
                    $i({
                        isFirst: current === 0,
                        isLast: current === length - 1,
                        key: key,
                        value: $,
                    })
                    current += 1
                })
            })
        }
    }
}