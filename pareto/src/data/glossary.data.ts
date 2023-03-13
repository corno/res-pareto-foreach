import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    builderMethod,
    builderReference,
    glossaryParameter,
    boolean,
    ref,

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
    'type': ['synchronous', {
        'builders': d({
            "OnElement": builderMethod(typeReference("Value")),
            "OnEntry": builderMethod(typeReference("KeyValuePair")),
            "OnEnrichedDictionary": ['group', {
                'members': d({
                    "onEmpty": builderMethod(null),
                    "onNotEmpty": builderMethod(null, builderMethod(typeReference("AnnotatedEntry"))),
                }),
            }],
            "OnEnrichedArray": ['group', {
                'members': d({
                    "onEmpty": builderMethod(null),
                    "onNotEmpty": builderMethod(null, builderMethod(typeReference("AnnotatedElement"))),
                }),
            }],
        }),
        'functions': d({
            "DecorateDictionaryEntriesWithKey": sfunc(typeReference("Dictionary"), null, null, sdata(typeReference("KeyValueDictionary"))),
            "ArrayForEach": sfunc(typeReference("Array"), null, builderReference("OnElement"), null),
            "DictionaryForEach": sfunc(typeReference("Dictionary"), null, builderReference("OnEntry"), null),
            "EnrichedDictionaryForEach": sfunc(typeReference("Dictionary"), null, builderReference("OnEnrichedDictionary"), null),
            "EnrichedArrayForEach": sfunc(typeReference("Array"), null, builderReference("OnEnrichedArray"), null),
        }),

    }],
}