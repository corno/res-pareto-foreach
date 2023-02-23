

import { CcreateDictionaryForEach } from "../api"

export const $$:CcreateDictionaryForEach = ($d) => {
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