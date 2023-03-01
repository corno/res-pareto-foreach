

import { CdecorateDictionaryEntriesWithKey } from "../api"

export const $$:CdecorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}