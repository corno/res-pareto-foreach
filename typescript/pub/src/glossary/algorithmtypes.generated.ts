import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnElement = <AType>($: AType, ) => void
        
        export type OnEnrichedArray = {
            readonly 'onEmpty': <AType>() => void
            readonly 'onNotEmpty': <AType>($c: ($b: <AType>($: T.AnnotatedElement<AType>, ) => void) => void) => void
        }
        
        export type OnEnrichedDictionary = {
            readonly 'onEmpty': <AType>() => void
            readonly 'onNotEmpty': <AType>($c: ($b: <AType>($: T.AnnotatedEntry<AType>, ) => void) => void) => void
        }
        
        export type OnEntry = <AType>($: T.KeyValuePair<AType>, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type ArrayForEach = <AType>($: T.Array<AType>, $i: SYNC.I.OnElement) => void
        }
        
        
        export namespace F {
            export type DecorateDictionaryEntriesWithKey = <AType>($: T.Dictionary<AType>) => T.KeyValueDictionary<AType>
        }
        
        
        export namespace P {
            export type DictionaryForEach = <AType>($: T.Dictionary<AType>, $i: SYNC.I.OnEntry) => void
        }
        
        
        export namespace P {
            export type EnrichedArrayForEach = <AType>($: T.Array<AType>, $i: SYNC.I.OnEnrichedArray) => void
        }
        
        
        export namespace P {
            export type EnrichedDictionaryForEach = <AType>($: T.Dictionary<AType>, $i: SYNC.I.OnEnrichedDictionary) => void
        }
    }
}