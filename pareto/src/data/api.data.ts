import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(procedure("this", {}, "ArrayForEach")),
        "dictionaryForEach": algorithm(procedure("this", {}, "DictionaryForEach"), {}, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedDictionaryForEach": algorithm(procedure("this", {}, "EnrichedDictionaryForEach"), {}, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedArrayForEach": algorithm(procedure("this", {}, "EnrichedArrayForEach")),
        "decorateDictionaryEntriesWithKey": algorithm(sfunction("this", {}, "DecorateDictionaryEntriesWithKey")),
    }),
}