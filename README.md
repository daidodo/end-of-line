# End-of-line

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
const eol = endOfLine(text); // '\n'
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

## License

MIT
