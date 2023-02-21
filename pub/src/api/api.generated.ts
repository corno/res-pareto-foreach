import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"

export type CarrayForEach = glo.FArrayForEach

export type CcreateDictionaryForEach = ($d: {
    readonly 'compare': mcollation.FIsABeforeB
}) => glo.FDictionaryForEach

export type CcreateEnrichedDictionaryForEach = ($d: {
    readonly 'compare': mcollation.FIsABeforeB
}) => glo.FEnrichedDictionaryForEach

export type CdecorateDictionaryEntriesWithKey = glo.FDecorateDictionaryEntriesWithKey

export type CenrichedArrayForEach = glo.FEnrichedArrayForEach

export type API = {
    arrayForEach: CarrayForEach
    createDictionaryForEach: CcreateDictionaryForEach
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
    decorateDictionaryEntriesWithKey: CdecorateDictionaryEntriesWithKey
    enrichedArrayForEach: CenrichedArrayForEach
}