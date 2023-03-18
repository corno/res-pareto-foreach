

import { A } from "../api.generated"

export const $$: decorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}