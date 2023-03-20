import * as pd from 'pareto-core-data'

import { algorithm, dependent, sconstructor, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "arrayForEach": algorithm(sconstructor("this", {}, "ArrayForEach"), { "Annotation": "Annnotation" }),
        "createDictionaryForEach": algorithm(sconstructor("this", {}, "DictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "createEnrichedDictionaryForEach": algorithm(sconstructor("this", {}, "EnrichedDictionaryForEach"), { "Annotation": "Annnotation" }, dependent(null, {
            "compare": sfunction("collation", {}, "IsABeforeB"),
        }, {})),
        "enrichedArrayForEach": algorithm(sconstructor("this", {}, "EnrichedArrayForEach"), { "Annotation": "Annnotation" }),
        "decorateDictionaryEntriesWithKey": algorithm(sfunction("this", {}, "DecorateDictionaryEntriesWithKey"), { "Annotation": "Annnotation" }),
    }),
}