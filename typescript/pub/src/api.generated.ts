import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_this from "./glossary"

export namespace A {
    
    export type arrayForEach = <GAnnotation>() => g_this.SYNC.A.B.ArrayForEach<GAnnotation>
    
    export type createDictionaryForEach = <GAnnotation>($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, ) => g_this.SYNC.A.B.DictionaryForEach<GAnnotation>
    
    export type createEnrichedDictionaryForEach = <GAnnotation>($d: {
        readonly 'compare': g_collation.SYNC.A.F.IsABeforeB
    }, ) => g_this.SYNC.A.B.EnrichedDictionaryForEach<GAnnotation>
    
    export type decorateDictionaryEntriesWithKey = <GAnnotation>() => g_this.SYNC.A.F.DecorateDictionaryEntriesWithKey<GAnnotation>
    
    export type enrichedArrayForEach = <GAnnotation>() => g_this.SYNC.A.B.EnrichedArrayForEach<GAnnotation>
}

export type API = {
    readonly 'arrayForEach': A.arrayForEach
    readonly 'createDictionaryForEach': A.createDictionaryForEach
    readonly 'createEnrichedDictionaryForEach': A.createEnrichedDictionaryForEach
    readonly 'decorateDictionaryEntriesWithKey': A.decorateDictionaryEntriesWithKey
    readonly 'enrichedArrayForEach': A.enrichedArrayForEach
}