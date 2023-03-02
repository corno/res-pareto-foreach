import { API } from "./definition/api.generated"
import { $$ as iarrayForEach } from "./implementations/arrayForEach.native"
import { $$ as icreateDictionaryForEach } from "./implementations/createDictionaryForEach.native"
import { $$ as icreateEnrichedDictionaryForEach } from "./implementations/createEnrichedDictionaryForEach.native"
import { $$ as idecorateDictionaryEntriesWithKey } from "./implementations/decorateDictionaryEntriesWithKey.native"
import { $$ as ienrichedArrayForEach } from "./implementations/enrichedArrayForEach.native"

export const $r: API = {
    'arrayForEach': iarrayForEach,
    'createDictionaryForEach': icreateDictionaryForEach,
    'createEnrichedDictionaryForEach': icreateEnrichedDictionaryForEach,
    'decorateDictionaryEntriesWithKey': idecorateDictionaryEntriesWithKey,
    'enrichedArrayForEach': ienrichedArrayForEach,
}