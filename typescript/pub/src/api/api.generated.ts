import * as pt from 'pareto-core-types'

import * as gcollation from "res-pareto-collation"
import * as gthis from "./glossary"

export type CarrayForEach = gthis.FArrayForEach

export type CcreateDictionaryForEach = ($d: {
    readonly 'compare': gcollation.FIsABeforeB
}) => gthis.FDictionaryForEach

export type CcreateEnrichedDictionaryForEach = ($d: {
    readonly 'compare': gcollation.FIsABeforeB
}) => gthis.FEnrichedDictionaryForEach

export type CdecorateDictionaryEntriesWithKey = gthis.FDecorateDictionaryEntriesWithKey

export type CenrichedArrayForEach = gthis.FEnrichedArrayForEach

export type API = {
    arrayForEach: CarrayForEach
    createDictionaryForEach: CcreateDictionaryForEach
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
    decorateDictionaryEntriesWithKey: CdecorateDictionaryEntriesWithKey
    enrichedArrayForEach: CenrichedArrayForEach
}