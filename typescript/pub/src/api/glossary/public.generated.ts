import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type IOnElement<GPType> = ($: T.Value<GPType>, ) => void

export type IOnEnrichedArray<GPType> = {
    'onEmpty': () => void
    'onNotEmpty': ($c: ($i: ($: T.AnnotatedElement<GPType>, ) => void) => void) => void
}

export type IOnEnrichedDictionary<GPType> = {
    'onEmpty': () => void
    'onNotEmpty': ($c: ($i: ($: T.AnnotatedEntry<GPType>, ) => void) => void) => void
}

export type IOnEntry<GPType> = ($: T.KeyValuePair<GPType>, ) => void

export type FArrayForEach = <GPType>($: T.Array<GPType>, $i: IOnElement<GPType>,) => void

export type FDecorateDictionaryEntriesWithKey = <GPType>($: T.Dictionary<GPType>,) => T.KeyValueDictionary<GPType>

export type FDictionaryForEach = <GPType>($: T.Dictionary<GPType>, $i: IOnEntry<GPType>,) => void

export type FEnrichedArrayForEach = <GPType>($: T.Array<GPType>, $i: IOnEnrichedArray<GPType>,) => void

export type FEnrichedDictionaryForEach = <GPType>($: T.Dictionary<GPType>, $i: IOnEnrichedDictionary<GPType>,) => void