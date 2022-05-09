import { getProgram } from '../../src/cli/Program';
import { ActionGeneratorType } from '../../src/core/types/ActionGeneratorType';
import {NamingType} from "../../src/core/types/NamingType";

describe('src/Program', () => {
    it('getProgram default values', () => {
        const options = getProgram().opts();
        expect(options).toEqual({
            skipPostProcess: false,
            actionGenerator: ActionGeneratorType.NONE,
            addEslintDisable: false,
            skipTypes: false,
            strict: true,
            explicitTypes: false,
            apiBasePath: undefined,
            naming: NamingType.NONE
        });
    });

    it('Allows to override default values', () => {
        const options = getProgram().parse([
            '--skip-post-process',
            '--action-generator',
            'react-fetching-library',
            '--add-eslint-disable',
            '--skip-types',
            '--no-strict',
            '--api-base-path',
            './mybase',
            '--explicit-types',
            '-i',
            'input',
            '-o',
            'output',
            '--naming',
            'camel-case'
        ], {
            from: 'user'
        }).opts();

        expect(options).toEqual({
            skipPostProcess: true,
            actionGenerator: ActionGeneratorType.REACT_FETCHING_LIBRARY,
            addEslintDisable: true,
            skipTypes: true,
            strict: false,
            explicitTypes: true,
            input: 'input',
            output: 'output',
            apiBasePath: './mybase',
            naming: NamingType.CAMEL_CASE
        });
    });
});
