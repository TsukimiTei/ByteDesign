#!/bin/bash
# ByteDesign Installer
# Usage: curl -fsSL https://raw.githubusercontent.com/TsukimiTei/ByteDesign/main/install.sh | bash

set -e

COMMAND_DIR="$HOME/.claude/commands"
COMMAND_DEST="$COMMAND_DIR/bytedesign.md"
RAW_URL="https://raw.githubusercontent.com/TsukimiTei/ByteDesign/main/command/bytedesign.md"

mkdir -p "$COMMAND_DIR"

curl -fsSL "$RAW_URL" -o "$COMMAND_DEST"

echo ""
echo "  ✓ ByteDesign installed successfully!"
echo ""
echo "  Location: $COMMAND_DEST"
echo ""
echo "  Usage in Claude Code:"
echo "    /bytedesign <describe your UI>"
echo ""
echo "  Examples:"
echo "    /bytedesign a dashboard with sidebar and stats cards"
echo "    /bytedesign mobile app login page"
echo ""
