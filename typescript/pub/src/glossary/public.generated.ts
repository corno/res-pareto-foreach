import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace B {
    
    export type OnElement<GType> = ($: T.Value<GType>, ) => void
    
    export type OnEnrichedArray<GType> = {
        'onEmpty': () => void
        'onNotEmpty': ($c: ($b: ($: T.AnnotatedElement<GType>, ) => void) => void) => void
    }
    
    export type OnEnrichedDictionary<GType> = {
        'onEmpty': () => void
        'onNotEmpty': ($c: ($b: ($: T.AnnotatedEntry<GType>, ) => void) => void) => void
    }
    
    export type OnEntry<GType> = ($: T.KeyValuePair<GType>, ) => void
}

export namespace F {
    
    export type ArrayForEach = <GType>($: T.Array<GType>, $b: B.OnElement<GType>,) => void
    
    export type DecorateDictionaryEntriesWithKey = <GType>($: T.Dictionary<GType>,) => T.KeyValueDictionary<GType>
    
    export type DictionaryForEach = <GType>($: T.Dictionary<GType>, $b: B.OnEntry<GType>,) => void
    
    export type EnrichedArrayForEach = <GType>($: T.Array<GType>, $b: B.OnEnrichedArray<GType>,) => void
    
    export type EnrichedDictionaryForEach = <GType>($: T.Dictionary<GType>, $b: B.OnEnrichedDictionary<GType>,) => void
}