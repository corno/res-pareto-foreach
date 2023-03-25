import * as pd from 'pareto-core-data'

import {
    string,
    dictionary, member, group,
    array,
    typeReference,
    boolean,
    ref,
    sInterfaceMethod,
    sfunction,
    data,
    procedure,
    sInterfaceReference,
    parametrizedType,
    typeParameter,
    sInterface,
    tp,
    parameter,

} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
    'types': d({
        "FIXMEType": parametrizedType({ "Type": null }, typeParameter("Type")),
        "Array": parametrizedType({ "Type": null }, array(typeParameter("Type"))),
        "Dictionary": parametrizedType({ "Type": null }, dictionary(typeParameter("Type"))),
        "KeyValueDictionary": parametrizedType({ "Type": null }, dictionary(ref(typeReference("KeyValuePair", { "Type": tp(typeReference("FIXMEType")) })))),
        "KeyValuePair": parametrizedType({ "Type": null }, group({
            "key": member(string()),
            "value": member(typeParameter("Type")),
        })),
        "AnnotatedEntry": parametrizedType({ "Type": null }, group({
            "isFirst": member(boolean()),
            "isLast": member(boolean()),
            "key": member(string()),
            "value": member(typeParameter("Type")),
        })),
        "AnnotatedElement": parametrizedType({ "Type": null }, group({
            "isFirst": member(boolean()),
            "isLast": member(boolean()),
            "value": member(typeParameter("Type")),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({
            "OnElement": sInterface(sInterfaceMethod(parameter("Type")), { "Type": null }),
            "OnEntry": sInterface(sInterfaceMethod(tp(typeReference("KeyValuePair", { "Type": parameter("Type") }))), { "Type": null }),
            "OnEnrichedDictionary": sInterface(['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(tp(typeReference("AnnotatedEntry", { "Type": parameter("Type") })))),
                }),
            }], { "Type": null }),
            "OnEnrichedArray": sInterface(['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(tp(typeReference("AnnotatedElement", { "Type": parameter("Type") })))),
                }),
            }], { "Type": null }),
        }),
        'algorithms': d({
            "ArrayForEach": procedure(data(tp(typeReference("Array", { "Type": parameter("Type") }))), sInterfaceReference("OnElement"), { "Type": null }),
            "DictionaryForEach": procedure(data(tp(typeReference("Dictionary", { "Type": parameter("Type") }))), sInterfaceReference("OnEntry"), { "Type": null }),
            "EnrichedDictionaryForEach": procedure(data(tp(typeReference("Dictionary", { "Type": parameter("Type") }))), sInterfaceReference("OnEnrichedDictionary"), { "Type": null }),
            "EnrichedArrayForEach": procedure(data(tp(typeReference("Array", { "Type": parameter("Type") }))), sInterfaceReference("OnEnrichedArray"), { "Type": null }),
            "DecorateDictionaryEntriesWithKey": sfunction(tp(typeReference("KeyValueDictionary", { "Type": parameter("Type") })), data(tp(typeReference("Dictionary", { "Type": parameter("Type") }))), { "Type": null }),
        }),
    },
}