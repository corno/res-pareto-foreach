import * as pt from 'pareto-core-types'


export namespace N {}

export namespace T {
    
    export namespace AnnotatedElement {
        
        export type isFirst<TType> = boolean
        
        export type isLast<TType> = boolean
        
        export type value<TType> = TType
    }
    
    export type AnnotatedElement<TType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'value': TType
    }
    
    export namespace AnnotatedEntry {
        
        export type isFirst<TType> = boolean
        
        export type isLast<TType> = boolean
        
        export type key<TType> = string
        
        export type value<TType> = TType
    }
    
    export type AnnotatedEntry<TType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'key': string
        readonly 'value': TType
    }
    
    export namespace Array {
        
        export type A<TType> = TType
    }
    
    export type Array<TType> = pt.Array<TType>
    
    export namespace Dictionary {
        
        export type D<TType> = TType
    }
    
    export type Dictionary<TType> = pt.Dictionary<TType>
    
    export namespace KeyValueDictionary {
        
        export type D<TType> = T.KeyValuePair<TType>
    }
    
    export type KeyValueDictionary<TType> = pt.Dictionary<T.KeyValuePair<TType>>
    
    export namespace KeyValuePair {
        
        export type key<TType> = string
        
        export type value<TType> = TType
    }
    
    export type KeyValuePair<TType> = {
        readonly 'key': string
        readonly 'value': TType
    }
}