

import * as api from "../api"

export const $$: api.CcreateDictionaryForEach = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.compare({ a: a, b: b })

        $.__forEach(compare, ($, key) => {
            $i({
                key: key,
                value: $,
            })
        })
    }
}