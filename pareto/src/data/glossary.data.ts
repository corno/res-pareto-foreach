import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    number,
    method,
    interfaceReference,
    glossaryParameter,
    boolean,
    
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
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
}