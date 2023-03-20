

import { A } from "../api.generated"

export const $$: A.decorateDictionaryEntriesWithKey = () => {
    return ($) => {
        return $.__mapWithKey(($, key) => {
            return {
                key: key,
                value: $,
            }
        })
    }
}