import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "forEach functions for dictionaries and arrays",
    'license': "ISC",

    'dependencies': d({
        "res-pareto-collation": {},
    }),
    'type': ['resource', {
        'definition': api,
        'nativeDependencies': d({}),
        'devDependencies': d({
            //"@types/node": {},
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}