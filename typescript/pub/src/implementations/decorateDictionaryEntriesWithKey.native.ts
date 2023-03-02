

import { CdecorateDictionaryEntriesWithKey } from "../definition/api.generated"

export const $$:CdecorateDictionaryEntriesWithKey = ($) => {
    return $.__mapWithKey(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}