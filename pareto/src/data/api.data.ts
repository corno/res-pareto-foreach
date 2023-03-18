import * as pd from 'pareto-core-data'

import { algorithm, dependent, sconstructor, sfunction, sFunctionReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(sconstructor("this", {}, "ArrayForEach")),
        "createDictionaryForEach": algorithm(sconstructor("this", {}, "DictionaryForEach"), dependent(null, {
            "compare": sFunctionReference("collation", {}, "IsABeforeB"),
        }, {})),
        "createEnrichedDictionaryForEach": algorithm(sconstructor("this", {}, "EnrichedDictionaryForEach"), dependent(null, {
            "compare": sFunctionReference("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedArrayForEach": algorithm(sconstructor("this", {}, "EnrichedArrayForEach")),
        "decorateDictionaryEntriesWithKey": algorithm(sfunction("this", {}, "DecorateDictionaryEntriesWithKey")),
    }),
}