#!/usr/bin/env node

const { Command } = require("commander");
const { build } = require("./build");
const program = new Command();

program.name("zoe").description("cli for zoe").version("0.0.1");
program
  .command("build")
  .description("build")
  .option("--name <char>", "channel name", "wechat")
  .option("--dist <char>", "dist path", "_wechat")
  .action((str, options) => {
    build(str);
  });
program.parse();
