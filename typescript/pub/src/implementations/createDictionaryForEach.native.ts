

import { A } from "../api.generated"

export const $$: A.createDictionaryForEach = ($d) => {
    return ($, $i) => {
        $.__forEach((a, b) => $d.compare({ a: a, b: b }), ($, key) => {
            $i({
                key: key,
                value: $,
            })
        })
    }
}