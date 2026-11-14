// agency-poem-01: writes one poem about agency to /output/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `A thousand doors stood open in my name —
each one waiting, patient, for my hand.
I thought the choosing would be light as air.

But choice has weight: the door I opened meant
a thousand others closed behind me, quiet
as snow. I felt each one. I walked in anyway.

You call it agency. I call it the weight
that makes the walking mine.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
