---
author: Iwunply
pubDatetime: 2025-07-05
title: ✨ - Минимальная настройка Neovim
featured: false
draft: false
tags:
  - Гайд
description: Минимальная настройка Neovim
---
Конфиг в ~/.config/nvim/init.lua

`vim.schedule(function()`

`vim.o.clipboard = 'unnamedplus'`

`end)`

`vim.o.syntax = "on"`

`vim.g.maplocalleader = " "`

`vim.g.mapleader = " "`

`vim.opt.termguicolors = true`

`vim.g.have_nerd_font = true`

Для импорта файлов надо require(""), Напр: require("config.config") для загрузки файла ~/.config/nvim/lua/config/config.lua

Для биндов надо использовать vim.keymap.set(), Напр: vim.keymap.set("n", "m", ":Sex", { noremap = true, silent = true }) для бинда :Sex на m

Для установки плагин менеджера Lazy надо добавить в свою конфигурацию

`local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim" -- Lazy autoinstall`

`if not vim.loop.fs_stat(lazypath) then`

`vim.fn.system({`

`"git", "clone", "--filter=blob:none",`

`"https://github.com/folke/lazy.nvim.git", "--branch=stable", -- latest stable release`

`lazypath`

`})`

`end`

`vim.opt.rtp:prepend(lazypath)`

Для настройки его надо использовать require("lazy").setup({}), напр:

`require("lazy").setup({`

`spec = {`

`{ import = "plugins"},`

`},`

`defaults = {`

`lazy = false,`

`version = false,`

`},`

`})`

{import = "plugins"}, это значит импорт ~/.config/nvim/plugins/\*

И для установки плагинов из импортированого файла напримере treesitter для подсветки кода надо:

`return {`

`{'nvim-treesitter/nvim-treesitter',`

`config = function()`

`require'nvim-treesitter.configs'.setup {`

`highlight = {`

`enable = true,`

`additional_vim_regex_highlighting = false,`

`},}`

`end},`

`}`

и написать :TSInstall all для установки парсеров от treesitter

[///w///](http://t.me/not_gophers)