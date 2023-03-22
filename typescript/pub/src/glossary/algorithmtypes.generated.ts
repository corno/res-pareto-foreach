import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
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
    
    export namespace A {
        
        
        export namespace P {
            export type ArrayForEach<GType> = ($: T.Array<GType>, $i: SYNC.I.OnElement<GType>) => void
        }
        
        
        export namespace F {
            export type DecorateDictionaryEntriesWithKey<GType> = ($: T.Dictionary<GType>) => T.KeyValueDictionary<GType>
        }
        
        
        export namespace P {
            export type DictionaryForEach<GType> = ($: T.Dictionary<GType>, $i: SYNC.I.OnEntry<GType>) => void
        }
        
        
        export namespace P {
            export type EnrichedArrayForEach<GType> = ($: T.Array<GType>, $i: SYNC.I.OnEnrichedArray<GType>) => void
        }
        
        
        export namespace P {
            export type EnrichedDictionaryForEach<GType> = ($: T.Dictionary<GType>, $i: SYNC.I.OnEnrichedDictionary<GType>) => void
        }
    }
}