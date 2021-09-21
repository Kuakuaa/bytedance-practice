#!/usr/bin/env node
console.log("command hello cli");
import { program } from 'commander';
import * as index from './index.js'
// 策略模式
program.version("1.1.1");
program.command('init <name>')
  .description('init project')
  .action(index);