#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const COMMAND_NAME = 'bytedesign.md';
const SOURCE = path.join(__dirname, '..', 'command', COMMAND_NAME);
const CLAUDE_COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');
const DEST = path.join(CLAUDE_COMMANDS_DIR, COMMAND_NAME);

const VERSION = require('../package.json').version;

const HELP = `
  ╔══════════════════════════════════════════╗
  ║           ByteDesign v${VERSION}              ║
  ║   ASCII Wireframe Designer for Claude    ║
  ╚══════════════════════════════════════════╝

  Usage:
    bytedesign install     Install the /bytedesign command into Claude Code
    bytedesign uninstall   Remove the /bytedesign command from Claude Code
    bytedesign status      Check if ByteDesign is installed
    bytedesign --help      Show this help message
    bytedesign --version   Show version

  After installing, use in Claude Code:
    /bytedesign a login page with social auth buttons
    /bytedesign 一个电商商品详情页面
`;

function install() {
  if (!fs.existsSync(SOURCE)) {
    console.error('Error: Command template not found. Package may be corrupted.');
    process.exit(1);
  }

  fs.mkdirSync(CLAUDE_COMMANDS_DIR, { recursive: true });

  if (fs.existsSync(DEST)) {
    console.log('  Updating existing ByteDesign command...');
  }

  fs.copyFileSync(SOURCE, DEST);

  console.log(`
  ✓ ByteDesign installed successfully!

  Location: ${DEST}

  Usage in Claude Code:
    /bytedesign <describe your UI>

  Examples:
    /bytedesign a dashboard with sidebar nav and stats cards
    /bytedesign 一个带搜索功能的用户列表页面
    /bytedesign mobile app onboarding flow with 3 screens
  `);
}

function uninstall() {
  if (fs.existsSync(DEST)) {
    fs.unlinkSync(DEST);
    console.log(`
  ✓ ByteDesign uninstalled.
  Removed: ${DEST}
    `);
  } else {
    console.log('  ByteDesign is not installed.');
  }
}

function status() {
  if (fs.existsSync(DEST)) {
    const stat = fs.statSync(DEST);
    console.log(`
  ✓ ByteDesign is installed.
  Location: ${DEST}
  Modified: ${stat.mtime.toLocaleDateString()}
    `);
  } else {
    console.log(`
  ✗ ByteDesign is not installed.
  Run "bytedesign install" to set it up.
    `);
  }
}

// Parse command
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'install':
    install();
    break;
  case 'uninstall':
    uninstall();
    break;
  case 'status':
    status();
    break;
  case '--version':
  case '-v':
    console.log(VERSION);
    break;
  case '--help':
  case '-h':
  case undefined:
    console.log(HELP);
    break;
  default:
    console.log(`  Unknown command: ${command}`);
    console.log('  Run "bytedesign --help" for usage.');
    process.exit(1);
}
