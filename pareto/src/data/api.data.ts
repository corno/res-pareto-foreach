import * as pd from 'pareto-core-data'

import {
    string,
    reference,
    boolean as bln,
    number as nr,
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, func, glossaryParameter, type, data, interfaceReference, method, boolean
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'parameters': d({
            "Type": {},
        }),
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'types': d({
            "Array": type(array(glossaryParameter("Type"))),
            "Dictionary": type(dictionary(glossaryParameter("Type"))),
            "KeyValueDictionary": type(dictionary(reference("KeyValuePair"))),
            "KeyValuePair": type(group({
                "key": member(string()),
                "value": member(glossaryParameter("Type")),
            })),
            "AnnotatedEntry": type(group({
                "isFirst": member(boolean()),
                "isLast": member(boolean()),
                "key": member(string()),
                "value": member(glossaryParameter("Type")),
            })),
            "AnnotatedElement": type(group({
                "isFirst": member(boolean()),
                "isLast": member(boolean()),
                "value": member(glossaryParameter("Type")),
            })),
            "Value": type(glossaryParameter("Type"))
        }),
        'interfaces': d({
            "OnElement": method(typeReference("Value")),
            "OnEntry": method(typeReference("KeyValuePair")),
            "OnEnrichedDictionary": ['group', {
                'members': d({
                    "onEmpty": method(null),
                    "onNotEmpty": method(null, method(typeReference("AnnotatedEntry")), true),
                }),
            }],
            "OnEnrichedArray": ['group', {
                'members': d({
                    "onEmpty": method(null),
                    "onNotEmpty": method(null, method(typeReference("AnnotatedElement")), true),
                }),
            }],
        }),
        'functions': d({
            "DecorateDictionaryEntriesWithKey": func(typeReference("Dictionary"), null, null, data(typeReference("KeyValueDictionary"), false)),
            "ArrayForEach": func(typeReference("Array"), null, interfaceReference("OnElement"), null),
            "DictionaryForEach": func(typeReference("Dictionary"), null, interfaceReference("OnEntry"), null),
            "EnrichedDictionaryForEach": func(typeReference("Dictionary"), null, interfaceReference("OnEnrichedDictionary"), null),
            "EnrichedArrayForEach": func(typeReference("Array"), null, interfaceReference("OnEnrichedArray"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation"
        }),
        'algorithms': d({
            "arrayForEach": algorithm(definitionReference("ArrayForEach")),
            "createDictionaryForEach": algorithm(definitionReference("DictionaryForEach"), constructor(null, {
                "compare": definitionReference("collation", {}, "IsABeforeB")
            })),
            "createEnrichedDictionaryForEach": algorithm(definitionReference("EnrichedDictionaryForEach"), constructor(null, {
                "compare": definitionReference("collation", {}, "IsABeforeB")
            })),
            "enrichedArrayForEach": algorithm(definitionReference("EnrichedArrayForEach")),
            "decorateDictionaryEntriesWithKey": algorithm(definitionReference("DecorateDictionaryEntriesWithKey")),
        })
    },
}