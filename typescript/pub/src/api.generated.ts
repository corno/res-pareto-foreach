import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"

export namespace A {
    
    export type arrayForEach = <GAnnotation>() => g_this.SYNC.A.C.ArrayForEach<GAnnotation>
    
    export type createDictionaryForEach = <GAnnotation>($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, $se: null) => g_this.SYNC.A.C.DictionaryForEach<GAnnotation>
    
    export type createEnrichedDictionaryForEach = <GAnnotation>($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, $se: null) => g_this.SYNC.A.C.EnrichedDictionaryForEach<GAnnotation>
    
    export type decorateDictionaryEntriesWithKey = <GAnnotation>() => g_this.SYNC.A.F.DecorateDictionaryEntriesWithKey<GAnnotation>
    
    export type enrichedArrayForEach = <GAnnotation>() => g_this.SYNC.A.C.EnrichedArrayForEach<GAnnotation>
}

export type API = {
    readonly 'arrayForEach': A.arrayForEach
    readonly 'createDictionaryForEach': A.createDictionaryForEach
    readonly 'createEnrichedDictionaryForEach': A.createEnrichedDictionaryForEach
    readonly 'decorateDictionaryEntriesWithKey': A.decorateDictionaryEntriesWithKey
    readonly 'enrichedArrayForEach': A.enrichedArrayForEach
}