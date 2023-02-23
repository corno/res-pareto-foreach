import * as mapi from "../api"

export const $$: mapi.CdecorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}