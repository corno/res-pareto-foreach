import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedElement {
        
        export type isFirst<GType> = boolean
        
        export type isLast<GType> = boolean
        
        export type value<GType> = GType
    }
    
    export type AnnotatedElement<GType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'value': GType
    }
    
    export namespace AnnotatedEntry {
        
        export type isFirst<GType> = boolean
        
        export type isLast<GType> = boolean
        
        export type key<GType> = string
        
        export type value<GType> = GType
    }
    
    export type AnnotatedEntry<GType> = {
        readonly 'isFirst': boolean
        readonly 'isLast': boolean
        readonly 'key': string
        readonly 'value': GType
    }
    
    export namespace Array {
        
        export type A<GType> = GType
    }
    
    export type Array<GType> = pt.Array<GType>
    
    export namespace Dictionary {
        
        export type D<GType> = GType
    }
    
    export type Dictionary<GType> = pt.Dictionary<GType>
    
    export namespace KeyValueDictionary {
        
        export type D<GType> = T.KeyValuePair<GType>
    }
    
    export type KeyValueDictionary<GType> = pt.Dictionary<T.KeyValuePair<GType>>
    
    export namespace KeyValuePair {
        
        export type key<GType> = string
        
        export type value<GType> = GType
    }
    
    export type KeyValuePair<GType> = {
        readonly 'key': string
        readonly 'value': GType
    }
    
    export type Value<GType> = GType
}