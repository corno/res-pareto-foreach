import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnArray<GType> = ($: T.Array<GType>, ) => void
        
        export type OnDictionary<GType> = ($: T.Dictionary<GType>, ) => void
        
        export type OnElement<GType> = ($: T.Value<GType>, ) => void
        
        export type OnEnrichedArray<GType> = {
            readonly 'onEmpty': () => void
            readonly 'onNotEmpty': ($c: ($b: ($: T.AnnotatedElement<GType>, ) => void) => void) => void
        }
        
        export type OnEnrichedDictionary<GType> = {
            readonly 'onEmpty': () => void
            readonly 'onNotEmpty': ($c: ($b: ($: T.AnnotatedEntry<GType>, ) => void) => void) => void
        }
        
        export type OnEntry<GType> = ($: T.KeyValuePair<GType>, ) => void
    }
    
    export namespace IW {
        
        export type OnArray<GType> = ($c: ($b: I.OnArray<GType>) => void) => void
        
        export type OnDictionary<GType> = ($c: ($b: I.OnDictionary<GType>) => void) => void
        
        export type OnElement<GType> = ($c: ($b: I.OnElement<GType>) => void) => void
        
        export type OnEnrichedArray<GType> = ($c: ($b: I.OnEnrichedArray<GType>) => void) => void
        
        export type OnEnrichedDictionary<GType> = ($c: ($b: I.OnEnrichedDictionary<GType>) => void) => void
        
        export type OnEntry<GType> = ($c: ($b: I.OnEntry<GType>) => void) => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type ArrayForEach = <GType>($i: SYNC.I.OnElement<GType>, $c: ($b: SYNC.I.OnArray<GType>) => void) => void
        }
        
        
        export namespace F {
            export type DecorateDictionaryEntriesWithKey = <GType>($: T.Dictionary<GType>) => T.KeyValueDictionary<GType>
        }
        
        
        export namespace C {
            export type DictionaryForEach = <GType>($i: SYNC.I.OnEntry<GType>, $c: ($b: SYNC.I.OnDictionary<GType>) => void) => void
        }
        
        
        export namespace C {
            export type EnrichedArrayForEach = <GType>($i: SYNC.I.OnEnrichedArray<GType>, $c: ($b: SYNC.I.OnArray<GType>) => void) => void
        }
        
        
        export namespace C {
            export type EnrichedDictionaryForEach = <GType>($i: SYNC.I.OnEnrichedDictionary<GType>, $c: ($b: SYNC.I.OnDictionary<GType>) => void) => void
        }
    }
}