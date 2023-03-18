import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnArray<GType> = ($: T.Array<GType>, ) => void
        
        export type OnDictionary<GType> = ($: T.Dictionary<GType>, ) => void
        
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
    
    export namespace I2 {
        
        export type OnArray<GType> = ($b: I.OnArray<GType>) => void
        
        export type OnDictionary<GType> = ($b: I.OnDictionary<GType>) => void
        
        export type OnElement<GType> = ($b: I.OnElement<GType>) => void
        
        export type OnEnrichedArray<GType> = ($b: I.OnEnrichedArray<GType>) => void
        
        export type OnEnrichedDictionary<GType> = ($b: I.OnEnrichedDictionary<GType>) => void
        
        export type OnEntry<GType> = ($b: I.OnEntry<GType>) => void
    }
    
    export namespace I3 {
        
        export type OnArray<GType> = ($c: I2.OnArray<GType>) => void
        
        export type OnDictionary<GType> = ($c: I2.OnDictionary<GType>) => void
        
        export type OnElement<GType> = ($c: I2.OnElement<GType>) => void
        
        export type OnEnrichedArray<GType> = ($c: I2.OnEnrichedArray<GType>) => void
        
        export type OnEnrichedDictionary<GType> = ($c: I2.OnEnrichedDictionary<GType>) => void
        
        export type OnEntry<GType> = ($c: I2.OnEntry<GType>) => void
    }
    
    export namespace C {
        
        export type ArrayForEach = <GType>($i: I.OnElement<GType>, $c: ($b: I.OnArray<GType>) => void) => void
        
        export type DictionaryForEach = <GType>($i: I.OnEntry<GType>, $c: ($b: I.OnDictionary<GType>) => void) => void
        
        export type EnrichedArrayForEach = <GType>($i: I.OnEnrichedArray<GType>, $c: ($b: I.OnArray<GType>) => void) => void
        
        export type EnrichedDictionaryForEach = <GType>($i: I.OnEnrichedDictionary<GType>, $c: ($b: I.OnDictionary<GType>) => void) => void
    }
    
    export namespace C2 {
        
        export type ArrayForEach = ($b: C.ArrayForEach) => void
        
        export type DictionaryForEach = ($b: C.DictionaryForEach) => void
        
        export type EnrichedArrayForEach = ($b: C.EnrichedArrayForEach) => void
        
        export type EnrichedDictionaryForEach = ($b: C.EnrichedDictionaryForEach) => void
    }
    
    export namespace C3 {
        
        export type ArrayForEach = ($c: C2.ArrayForEach) => void
        
        export type DictionaryForEach = ($c: C2.DictionaryForEach) => void
        
        export type EnrichedArrayForEach = ($c: C2.EnrichedArrayForEach) => void
        
        export type EnrichedDictionaryForEach = ($c: C2.EnrichedDictionaryForEach) => void
    }
    
    export namespace F {
        
        export type DecorateDictionaryEntriesWithKey = <GType>($: T.Dictionary<GType>) => T.KeyValueDictionary<GType>
    }
}