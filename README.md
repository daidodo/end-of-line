# End-of-line

[![npm](https://img.shields.io/npm/v/@dozerg/end-of-line.svg)](https://www.npmjs.com/package/@dozerg/end-of-line) ![Downloads](https://img.shields.io/npm/dm/@dozerg/end-of-line.svg)
[![Build Status](https://github.com/daidodo/end-of-line/actions/workflows/node.js.yml/badge.svg)](https://github.com/daidodo/end-of-line/actions)

Determine EOL based on given text and OS.

## Install

```sh
npm i @dozerg/end-of-line
```

## Usage

```ts
import { endOfLine } from '@dozerg/end-of-line';

// Detect OS-specific EOL.
const default_eol = endOfLine();

// Detect EOL for a given text.
const text = 'some\ntext\nwith\r\nnewlines\r';
const text_eol = endOfLine(text); // '\n'

// Detect EOL for a file.
const filename = '/path/to/file.ext';
const file_eol = endOfLineForFile(filename);
```

## APIs

### `function endOfLine(): string`

Determine the OS-specific end-of-line marker. Equivalent to [os.EOL](https://nodejs.org/api/os.html#os_os_eol).

### `function endOfLine(text: string): string`

Determine end-of-line marker for a given text. The following markers will be recognized:

- `\n`
- `\r\n`
- `\r`
- `\n\r`

If there is no EOL found, [os.EOL](https://nodejs.org/api/os.html#os_os_eol) will be returned.

### `function endOfLineForFile(filePath: string): string`

Determine end-of-line marker for a given file.

If file doesn't exist or cannot be read, [os.EOL](https://nodejs.org/api/os.html#os_os_eol) will be returned.

## License

MIT
