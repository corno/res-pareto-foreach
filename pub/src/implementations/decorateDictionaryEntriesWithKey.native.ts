import * as api from "../api"

export const $$: api.CdecorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}