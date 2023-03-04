import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(functionReference("this", {}, "ArrayForEach")),
        "createDictionaryForEach": algorithm(functionReference("this", {}, "DictionaryForEach"), constructor(null, {
            "compare": functionReference("collation", {}, "IsABeforeB")
        })),
        "createEnrichedDictionaryForEach": algorithm(functionReference("this", {}, "EnrichedDictionaryForEach"), constructor(null, {
            "compare": functionReference("collation", {}, "IsABeforeB")
        })),
        "enrichedArrayForEach": algorithm(functionReference("this", {}, "EnrichedArrayForEach")),
        "decorateDictionaryEntriesWithKey": algorithm(functionReference("this", {}, "DecorateDictionaryEntriesWithKey")),
    })
}