import * as pd from 'pareto-core-data'

import { algorithm, dependent, sbuilder, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(sbuilder("this", {}, "ArrayForEach"), { "Annotation": "Annnotation" }),
        "createDictionaryForEach": algorithm(sbuilder("this", {}, "DictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "createEnrichedDictionaryForEach": algorithm(sbuilder("this", {}, "EnrichedDictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedArrayForEach": algorithm(sbuilder("this", {}, "EnrichedArrayForEach"), { "Annotation": "Annnotation" }),
        "decorateDictionaryEntriesWithKey": algorithm(sfunction("this", {}, "DecorateDictionaryEntriesWithKey"), { "Annotation": "Annnotation" }),
    }),
}