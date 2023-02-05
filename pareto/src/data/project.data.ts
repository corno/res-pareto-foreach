import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "forEach functions for dictionaries and arrays",
    'license': "ISC",
    
    'pubdependencies': d({
        //"glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({
            //"@types/node": {},
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}