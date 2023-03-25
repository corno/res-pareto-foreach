import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnElement = <TType>($: TType, ) => void
        
        export type OnEnrichedArray = {
            readonly 'onEmpty': <TType>() => void
            readonly 'onNotEmpty': <TType>($c: ($b: <TType>($: T.AnnotatedElement<TType>, ) => void) => void) => void
        }
        
        export type OnEnrichedDictionary = {
            readonly 'onEmpty': <TType>() => void
            readonly 'onNotEmpty': <TType>($c: ($b: <TType>($: T.AnnotatedEntry<TType>, ) => void) => void) => void
        }
        
        export type OnEntry = <TType>($: T.KeyValuePair<TType>, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type ArrayForEach = <TType>($: T.Array<TType>, $i: SYNC.I.OnElement) => void
        }
        
        
        export namespace F {
            export type DecorateDictionaryEntriesWithKey = <TType>($: T.Dictionary<TType>) => T.KeyValueDictionary<TType>
        }
        
        
        export namespace P {
            export type DictionaryForEach = <TType>($: T.Dictionary<TType>, $i: SYNC.I.OnEntry) => void
        }
        
        
        export namespace P {
            export type EnrichedArrayForEach = <TType>($: T.Array<TType>, $i: SYNC.I.OnEnrichedArray) => void
        }
        
        
        export namespace P {
            export type EnrichedDictionaryForEach = <TType>($: T.Dictionary<TType>, $i: SYNC.I.OnEnrichedDictionary) => void
        }
    }
}