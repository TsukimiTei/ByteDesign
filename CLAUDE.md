# ByteDesign

AI-powered ASCII wireframe designer. A Claude Code custom command that generates UX wireframe layouts from natural language descriptions.

## Project Structure

- `.claude/commands/bytedesign.md` — The custom command definition (core product)
- `command/bytedesign.md` — Distributable copy of the command (bundled in npm package)
- `bin/cli.js` — CLI entry point (`npx bytedesign install`)
- `package.json` — npm package configuration
- `site/index.html` — Product landing page
- `examples/` — Example wireframe outputs
- `install.sh` — Alternative bash install script

## How It Works

1. User installs via `npx bytedesign install` (copies command to `~/.claude/commands/`)
2. In Claude Code, types `/bytedesign <description>`
3. Claude generates an ASCII wireframe
4. User iterates or exports JSON for coding agents

## Development

- The command prompt is in `.claude/commands/bytedesign.md` — test with `/bytedesign` in this project
- Keep `command/bytedesign.md` in sync (this is what gets distributed via npm)
- User input is injected via `$ARGUMENTS` placeholder
- The command is stateless — relies on Claude Code conversation context for iteration
