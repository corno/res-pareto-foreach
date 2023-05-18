import { API } from "./api.generated"
import { $$ as iarrayForEach } from "./implementations/arrayForEach.native"
import { $$ as idecorateDictionaryEntriesWithKey } from "./implementations/decorateDictionaryEntriesWithKey.native"
import { $$ as idictionaryForEach } from "./implementations/dictionaryForEach.native"
import { $$ as ienrichedArrayForEach } from "./implementations/enrichedArrayForEach.native"
import { $$ as ienrichedDictionaryForEach } from "./implementations/enrichedDictionaryForEach.native"

export const $api: API = {
    'arrayForEach': iarrayForEach,
    'decorateDictionaryEntriesWithKey': idecorateDictionaryEntriesWithKey,
    'dictionaryForEach': idictionaryForEach,
    'enrichedArrayForEach': ienrichedArrayForEach,
    'enrichedDictionaryForEach': ienrichedDictionaryForEach,
}