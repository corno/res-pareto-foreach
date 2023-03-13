import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(functionReference("this", {}, "ArrayForEach")),
        "createDictionaryForEach": algorithm(functionReference("this", {}, "DictionaryForEach"), constructor(null, {
            "compare": functionReference("collation", {}, "IsABeforeB"),
        })),
        "createEnrichedDictionaryForEach": algorithm(functionReference("this", {}, "EnrichedDictionaryForEach"), constructor(null, {
            "compare": functionReference("collation", {}, "IsABeforeB"),
        })),
        "enrichedArrayForEach": algorithm(functionReference("this", {}, "EnrichedArrayForEach")),
        "decorateDictionaryEntriesWithKey": algorithm(functionReference("this", {}, "DecorateDictionaryEntriesWithKey")),
    }),
}