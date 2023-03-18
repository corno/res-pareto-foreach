import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"
export namespace A {
    
    export type arrayForEach = g_this.SYNC.C.ArrayForEach
    
    export type createDictionaryForEach = ($d: {
        readonly 'compare': g_collation.SYNC.F.IsABeforeB
    }, $se: {}) => g_this.SYNC.C.DictionaryForEach
    
    export type createEnrichedDictionaryForEach = ($d: {
        readonly 'compare': g_collation.SYNC.F.IsABeforeB
    }, $se: {}) => g_this.SYNC.C.EnrichedDictionaryForEach
    
    export type decorateDictionaryEntriesWithKey = g_this.SYNC.F.DecorateDictionaryEntriesWithKey
    
    export type enrichedArrayForEach = g_this.SYNC.C.EnrichedArrayForEach
}

export type API = {
    arrayForEach: A.arrayForEach
    createDictionaryForEach: A.createDictionaryForEach
    createEnrichedDictionaryForEach: A.createEnrichedDictionaryForEach
    decorateDictionaryEntriesWithKey: A.decorateDictionaryEntriesWithKey
    enrichedArrayForEach: A.enrichedArrayForEach
}