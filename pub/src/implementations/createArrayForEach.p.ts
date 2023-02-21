

import * as api from "../api"

export const $$: api.CcreateArrayForEach = ($d) => {
    return ($, $i) => {
        $.__forEach(($) => {
            $i({
                value: $,
            })
        })
    }
}