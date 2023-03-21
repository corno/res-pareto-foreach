import * as pd from 'pareto-core-data'

import {
    string,
    dictionary, member, group,
    array,
    typeReference,
    type,
    glossaryParameter,
    boolean,
    ref,
    sInterfaceMethod,
    sfunction,
    data,
    sbuilder,
    sInterfaceReference,

} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
    }),
    'imports': d({}),
    'types': d({
        "Array": type(array(glossaryParameter("Type"))),
        "Dictionary": type(dictionary(glossaryParameter("Type"))),
        "KeyValueDictionary": type(dictionary(ref(typeReference("KeyValuePair")))),
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
        "Value": type(glossaryParameter("Type")),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },
    'synchronous': {
        'interfaces': d({
            "OnElement": sInterfaceMethod(typeReference("Value")),
            "OnEntry": sInterfaceMethod(typeReference("KeyValuePair")),
            "OnEnrichedDictionary": ['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(typeReference("AnnotatedEntry"))),
                }),
            }],
            "OnEnrichedArray": ['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(typeReference("AnnotatedElement"))),
                }),
            }],
        }),
        'algorithms': d({
            "ArrayForEach": sbuilder(data(typeReference("Array")), sInterfaceReference("OnElement")),
            "DictionaryForEach": sbuilder(data(typeReference("Dictionary")), sInterfaceReference("OnEntry")),
            "EnrichedDictionaryForEach": sbuilder(data(typeReference("Dictionary")), sInterfaceReference("OnEnrichedDictionary")),
            "EnrichedArrayForEach": sbuilder(data(typeReference("Array")), sInterfaceReference("OnEnrichedArray")),
            "DecorateDictionaryEntriesWithKey": sfunction(typeReference("KeyValueDictionary"), data(typeReference("Dictionary"))),
        }),
    },
}