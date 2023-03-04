import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "forEach functions for dictionaries and arrays",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-collation": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    //"common": external("glo-pareto-common"),
                }),
            },
            'api': {
                'root': api,

                'imports': d({
                    "collation": external("res-pareto-collation"),
                    "this": this_(),
                }),
            },
        },
        'nativeDependencies': d({}),
        'devDependencies': d({
            //"@types/node": null,
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'builders': d({}),
                'interfaces': d({}),
                'functions': d({}),
            },
            'imports': d({}),
        }
    }],
}