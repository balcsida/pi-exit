# pi-exit

Minimal [pi](https://github.com/badlogic/pi-mono) package that adds a `/exit` command.

## Install

From GitHub:

```bash
pi install https://github.com/user/repo
```

From npm:

```bash
pi install npm:pi-exit
```

## Usage

Reload pi or restart it, then run:

```text
/exit
```

This requests a clean shutdown via `ctx.shutdown()`.

## Package contents

- `extensions/exit.ts` - registers `/exit`
