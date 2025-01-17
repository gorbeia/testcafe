import TestFile from '../../api/structure/test-file';
import Fixture from '../../api/structure/fixture';
import Test from '../../api/structure/test';
import { OptionalCompilerArguments } from '../interfaces';

export default function (testFile: TestFile, exportableLibExports: any, {
    isCompilerServiceMode,
    baseUrl,
}: OptionalCompilerArguments = {}): void {
    Object.defineProperty(exportableLibExports, 'fixture', {
        get:          () => Fixture.init.bind(Fixture, { testFile, baseUrl }),
        configurable: true,
    });

    Object.defineProperty(exportableLibExports, 'test', {
        get:          () => Test.init.bind(Test, { testFile, isCompilerServiceMode, baseUrl }),
        configurable: true,
    });
}
