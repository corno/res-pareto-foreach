import * as pr from 'pareto-core-raw'

import {
    string,
    reference,
    boolean as bln,
    number as nr,
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'parameters': d({}),
        'imports': d({
            //"common": "glo-pareto-common",
        }),
        'types': d({
        }),
        'interfaces': d({}),
        'functions': d({
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
        })
    },
}