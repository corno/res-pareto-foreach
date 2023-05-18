import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    export type dictionaryForEach = {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }
    
    
    export type enrichedDictionaryForEach = {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }
}

export namespace A {
    
    export type arrayForEach = () => g_this.SYNC.A.P.ArrayForEach
    
    export type decorateDictionaryEntriesWithKey = () => g_this.SYNC.A.F.DecorateDictionaryEntriesWithKey
    
    export type dictionaryForEach = ($d: D.dictionaryForEach, ) => g_this.SYNC.A.P.DictionaryForEach
    
    export type enrichedArrayForEach = () => g_this.SYNC.A.P.EnrichedArrayForEach
    
    export type enrichedDictionaryForEach = ($d: D.enrichedDictionaryForEach, ) => g_this.SYNC.A.P.EnrichedDictionaryForEach
}

export type API = {
    readonly 'arrayForEach': A.arrayForEach
    readonly 'decorateDictionaryEntriesWithKey': A.decorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': A.dictionaryForEach
    readonly 'enrichedArrayForEach': A.enrichedArrayForEach
    readonly 'enrichedDictionaryForEach': A.enrichedDictionaryForEach
}