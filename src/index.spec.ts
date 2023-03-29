import os from 'os';

import { endOfLine } from './';

describe('endOfLine', () => {
  it('should return the correct EOL', () => {
    expect(endOfLine()).toEqual(os.EOL);
    expect(endOfLine('')).toEqual(os.EOL);
    expect(endOfLine('   ')).toEqual(os.EOL);
    expect(endOfLine('  abc ')).toEqual(os.EOL);
    expect(endOfLine('  abc\n ')).toEqual('\n');
    expect(endOfLine('  abc\r ')).toEqual('\r');
    expect(endOfLine('  abc\r\n ')).toEqual('\r\n');
    expect(endOfLine('  abc\n\r ')).toEqual('\n\r');
  });
});
