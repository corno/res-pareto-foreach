import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnElement<TType> = ($: TType, ) => void
        
        export type OnEnrichedArray<TType> = {
            readonly 'onEmpty': () => void
            readonly 'onNotEmpty': ($c: ($b: ($: T.AnnotatedElement<TType>, ) => void) => void) => void
        }
        
        export type OnEnrichedDictionary<TType> = {
            readonly 'onEmpty': () => void
            readonly 'onNotEmpty': ($c: ($b: ($: T.AnnotatedEntry<TType>, ) => void) => void) => void
        }
        
        export type OnEntry<TType> = ($: T.KeyValuePair<TType>, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type ArrayForEach = <TType>($: T.Array<TType>, $i: SYNC.I.OnElement<TType>) => void
        }
        
        
        export namespace F {
            export type DecorateDictionaryEntriesWithKey = <TType>($: T.Dictionary<TType>) => T.KeyValueDictionary<TType>
        }
        
        
        export namespace P {
            export type DictionaryForEach = <TType>($: T.Dictionary<TType>, $i: SYNC.I.OnEntry<TType>) => void
        }
        
        
        export namespace P {
            export type EnrichedArrayForEach = <TType>($: T.Array<TType>, $i: SYNC.I.OnEnrichedArray<TType>) => void
        }
        
        
        export namespace P {
            export type EnrichedDictionaryForEach = <TType>($: T.Dictionary<TType>, $i: SYNC.I.OnEnrichedDictionary<TType>) => void
        }
    }
}