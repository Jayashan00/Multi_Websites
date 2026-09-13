# Security Notes

## What was found

While preparing the gym and hospital templates for use in this platform, both
`tailwind.config.js` files were found to contain a second block of code
appended after the legitimate configuration, hidden with heavy whitespace
padding so it wouldn't show in a normal editor window.

That code:
- Looked up recent transactions on a public blockchain explorer to resolve an
  IP address encoded inside a transaction's "to" address — a technique used
  to give malware a command-and-control address that's hard to take down or
  block, since blockchains can't be censored the way a normal server can.
- Used that resolved address to download further code over plain HTTP and
  execute it immediately, plus launch a second, detached Node process to keep
  running independently of the original one.

In short: it was a backdoor that, if the project's `npm` scripts were ever
run, would have downloaded and executed arbitrary code on that machine.

## What was done

- Both `tailwind.config.js` files were restored to contain only the
  legitimate Tailwind configuration.
- The entire codebase (all three templates, every `.js`/`.jsx`/`.ts`/`.tsx`/
  `.json` file) was scanned for the same injection pattern and for any other
  unusually long single-line files that might indicate similar tampering.
  Nothing else was found.
- Every `package.json` in all three templates was checked — all dependencies
  are legitimate, well-known packages (React, Vite, Tailwind, TanStack
  Router, etc.), no typosquatted or unfamiliar packages.
- No `postinstall`/`preinstall` scripts were found in any `package.json`,
  which is another common place to hide this kind of code.

## What you should do

If you (or anyone) ran `npm install`, `npm run dev`, or `npm run build` on
the **original** zip files — before this cleanup — on any machine, treat that
machine as potentially compromised:
- Run a malware scan.
- Rotate any credentials that were accessible from that machine or browser
  session (cloud provider tokens, SSH keys, saved passwords, crypto wallets).
- Be cautious with the original zip files going forward — use the cleaned
  copies in this project instead.
