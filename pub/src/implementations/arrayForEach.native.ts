

import * as api from "../api"

export const $$: api.CarrayForEach = ($, $i) => {
    $.__forEach(($) => {
        $i($)
    })
}