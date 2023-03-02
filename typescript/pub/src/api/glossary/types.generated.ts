import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedElement {
        
        export type isFirst<GPType> = boolean
        
        export type isLast<GPType> = boolean
        
        export type value<GPType> = GPType
    }
    
    export type AnnotatedElement<GPType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'value': GPType
    }
    
    export namespace AnnotatedEntry {
        
        export type isFirst<GPType> = boolean
        
        export type isLast<GPType> = boolean
        
        export type key<GPType> = string
        
        export type value<GPType> = GPType
    }
    
    export type AnnotatedEntry<GPType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'key': string
        readonly 'value': GPType
    }
    
    export namespace Array {
        
        export type A<GPType> = GPType
    }
    
    export type Array<GPType> = pt.Array<GPType>
    
    export namespace Dictionary {
        
        export type D<GPType> = GPType
    }
    
    export type Dictionary<GPType> = pt.Dictionary<GPType>
    
    export namespace KeyValueDictionary {
        
        export type D<GPType> = T.KeyValuePair<GPType>
    }
    
    export type KeyValueDictionary<GPType> = pt.Dictionary<T.KeyValuePair<GPType>>
    
    export namespace KeyValuePair {
        
        export type key<GPType> = string
        
        export type value<GPType> = GPType
    }
    
    export type KeyValuePair<GPType> = {
        readonly 'key': string
        readonly 'value': GPType
    }
    
    export type Value<GPType> = GPType
}