# End-of-line

Determine EOL based on given text and OS.

## Install

```sh
npm i @dozerg/end-of-line
```

## Usage

```ts
import { endOfLine } from '@dozerg/end-of-line';

// Detect EOL based on OS platform.
const default_eol = endOfLine();

// Detect EOL for given text
const text = 'some\ntext\nwith\r\nnewlines\r';
const eol = endOfLine(text); // '\n'
```

## License

MIT
