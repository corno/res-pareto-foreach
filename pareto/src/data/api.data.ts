import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(procedure("this", {}, "ArrayForEach"), { "Annotation": "Annnotation" }),
        "createDictionaryForEach": algorithm(procedure("this", {}, "DictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "createEnrichedDictionaryForEach": algorithm(procedure("this", {}, "EnrichedDictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedArrayForEach": algorithm(procedure("this", {}, "EnrichedArrayForEach"), { "Annotation": "Annnotation" }),
        "decorateDictionaryEntriesWithKey": algorithm(sfunction("this", {}, "DecorateDictionaryEntriesWithKey"), { "Annotation": "Annnotation" }),
    }),
}