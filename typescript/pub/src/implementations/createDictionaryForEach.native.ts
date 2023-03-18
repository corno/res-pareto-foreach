

import { A } from "../api.generated"

export const $$: A.createDictionaryForEach = ($d) => {
    return ($i, $c) => {
        $c(($) => {
            const compare = (a: string, b: string) => $d.compare({ a: a, b: b })
    
            $.__forEach(compare, ($, key) => {
                $i({
                    key: key,
                    value: $,
                })
            })
        })
    }
}