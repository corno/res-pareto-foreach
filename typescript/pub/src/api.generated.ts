import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"

export namespace A {
    
    export type arrayForEach = g_this.SYNC.A.C.ArrayForEach
    
    export type createDictionaryForEach = ($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, $se: null) => g_this.SYNC.A.C.DictionaryForEach
    
    export type createEnrichedDictionaryForEach = ($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, $se: null) => g_this.SYNC.A.C.EnrichedDictionaryForEach
    
    export type decorateDictionaryEntriesWithKey = g_this.SYNC.A.F.DecorateDictionaryEntriesWithKey
    
    export type enrichedArrayForEach = g_this.SYNC.A.C.EnrichedArrayForEach
}

export type API = {
    readonly 'arrayForEach': A.arrayForEach
    readonly 'createDictionaryForEach': A.createDictionaryForEach
    readonly 'createEnrichedDictionaryForEach': A.createEnrichedDictionaryForEach
    readonly 'decorateDictionaryEntriesWithKey': A.decorateDictionaryEntriesWithKey
    readonly 'enrichedArrayForEach': A.enrichedArrayForEach
}