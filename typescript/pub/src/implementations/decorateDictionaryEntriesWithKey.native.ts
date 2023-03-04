

import { decorateDictionaryEntriesWithKey } from "../definition/api.generated"

export const $$: decorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}