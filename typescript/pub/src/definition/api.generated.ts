import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"

export type arrayForEach = g_this.F.ArrayForEach

export type createDictionaryForEach = ($d: {
    readonly 'compare': g_collation.F.IsABeforeB
}) => g_this.F.DictionaryForEach

export type createEnrichedDictionaryForEach = ($d: {
    readonly 'compare': g_collation.F.IsABeforeB
}) => g_this.F.EnrichedDictionaryForEach

export type decorateDictionaryEntriesWithKey = g_this.F.DecorateDictionaryEntriesWithKey

export type enrichedArrayForEach = g_this.F.EnrichedArrayForEach

export type API = {
    arrayForEach: arrayForEach
    createDictionaryForEach: createDictionaryForEach
    createEnrichedDictionaryForEach: createEnrichedDictionaryForEach
    decorateDictionaryEntriesWithKey: decorateDictionaryEntriesWithKey
    enrichedArrayForEach: enrichedArrayForEach
}