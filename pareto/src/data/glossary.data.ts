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

} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Array": parametrizedType({ "Type": null }, array(ref(typeParameter("Type")))),
            "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
            "KeyValueDictionary": parametrizedType({ "Type": null }, dictionary(ref(typeReference("KeyValuePair", { "Type": typeParameter("Type") })))),
            "KeyValuePair": parametrizedType({ "Type": null }, group({
                "key": member(string()),
                "value": member(ref(typeParameter("Type"))),
            })),
            "AnnotatedEntry": parametrizedType({ "Type": null }, group({
                "isFirst": member(boolean()),
                "isLast": member(boolean()),
                "key": member(string()),
                "value": member(ref(typeParameter("Type"))),
            })),
            "AnnotatedElement": parametrizedType({ "Type": null }, group({
                "isFirst": member(boolean()),
                "isLast": member(boolean()),
                "value": member(ref(typeParameter("Type"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({
            "OnElement": sInterface(sInterfaceMethod(typeParameter("Type")), { "Type": null }),
            "OnEntry": sInterface(sInterfaceMethod(typeReference("KeyValuePair", { "Type": typeParameter("Type") })), { "Type": null }),
            "OnEnrichedDictionary": sInterface(['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(typeReference("AnnotatedEntry", { "Type": typeParameter("Type") }))),
                }),
            }], { "Type": null }),
            "OnEnrichedArray": sInterface(['group', {
                'members': d({
                    "onEmpty": sInterfaceMethod(null),
                    "onNotEmpty": sInterfaceMethod(null, sInterfaceMethod(typeReference("AnnotatedElement", { "Type": typeParameter("Type") }))),
                }),
            }], { "Type": null }),
        }),
        'algorithms': d({
            "ArrayForEach": procedure(data(typeReference("Array", { "Type": typeParameter("Type") })), sInterfaceReference("OnElement", { "Type": typeParameter("Type") }), { "Type": null }),
            "DictionaryForEach": procedure(data(typeReference("Dictionary", { "Type": typeParameter("Type") })), sInterfaceReference("OnEntry", { "Type": typeParameter("Type") }), { "Type": null }),
            "EnrichedDictionaryForEach": procedure(data(typeReference("Dictionary", { "Type": typeParameter("Type") })), sInterfaceReference("OnEnrichedDictionary", { "Type": typeParameter("Type") }), { "Type": null }),
            "EnrichedArrayForEach": procedure(data(typeReference("Array", { "Type": typeParameter("Type") })), sInterfaceReference("OnEnrichedArray", { "Type": typeParameter("Type") }), { "Type": null }),
            "DecorateDictionaryEntriesWithKey": sfunction(typeReference("KeyValueDictionary", { "Type": typeParameter("Type") }), data(typeReference("Dictionary", { "Type": typeParameter("Type") })), { "Type": null }),
        }),
    },
}