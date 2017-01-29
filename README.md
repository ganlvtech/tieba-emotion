# Tieba Emotion

WordPress贴吧表情替换

使用Javascript在页面加载之后对整个页面的文档树遍历，替换`#滑稽`等代码

## 安装

1. 解压到`wp-content/plugins/`文件夹

2. 在WordPress后台插件管理页面启用插件

## 文件说明
    tieba-emotion               插件目录
    ├─README.md                 README文件
    ├─tieba-emotion.php         WordPress插件入口文件
    │
    ├─css                       样式表文件夹
    │  └─style.css              表情样式
    │
    └─js                        JavaScript文件夹
       ├─script.js              表情替换具体执行代码
       ├─tieba-emotion-data.js  表情数据
       └─tieba-emotion.js       表情替换类


## Author

Ganlv <https://github.com/ganlvtech>

## LICENSE

[AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

    Copyright (C) 2017 Ganlv

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
