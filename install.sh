#!/bin/bash
# ByteDesign Installer
# Copies the ByteDesign command to your global Claude Code commands directory

set -e

COMMAND_SOURCE="$(dirname "$0")/.claude/commands/bytedesign.md"
COMMAND_DIR="$HOME/.claude/commands"
COMMAND_DEST="$COMMAND_DIR/bytedesign.md"

if [ ! -f "$COMMAND_SOURCE" ]; then
    echo "Error: Command file not found at $COMMAND_SOURCE"
    exit 1
fi

mkdir -p "$COMMAND_DIR"

if [ -f "$COMMAND_DEST" ]; then
    echo "ByteDesign command already exists at $COMMAND_DEST"
    read -p "Overwrite? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 0
    fi
fi

cp "$COMMAND_SOURCE" "$COMMAND_DEST"
echo "ByteDesign command installed to $COMMAND_DEST"
echo ""
echo "Usage: In Claude Code, type /bytedesign followed by your design description."
echo "Example: /bytedesign a login page with email, password, and social login buttons"
