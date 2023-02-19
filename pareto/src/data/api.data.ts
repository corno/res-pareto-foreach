import * as pd from 'pareto-core-data'

import {
    string,
    reference,
    boolean as bln,
    number as nr,
    nested,
    array,
    typeReference, dictionary, group, member, taggedUnion, types, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
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