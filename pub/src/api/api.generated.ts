import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"

export type CarrayForEach = gglo.FArrayForEach

export type CcreateDictionaryForEach = ($d: {
    readonly 'compare': gcollation.FIsABeforeB
}) => gglo.FDictionaryForEach

export type CcreateEnrichedDictionaryForEach = ($d: {
    readonly 'compare': gcollation.FIsABeforeB
}) => gglo.FEnrichedDictionaryForEach

export type CdecorateDictionaryEntriesWithKey = gglo.FDecorateDictionaryEntriesWithKey

export type CenrichedArrayForEach = gglo.FEnrichedArrayForEach

export type API = {
    arrayForEach: CarrayForEach
    createDictionaryForEach: CcreateDictionaryForEach
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
    decorateDictionaryEntriesWithKey: CdecorateDictionaryEntriesWithKey
    enrichedArrayForEach: CenrichedArrayForEach
}