/**
 * 贴吧表情前端替换
 * Version: 1.0.2
 * Author: Ganlv
 * Author URI: https://github.com/ganlvtech
 * License: AGPL-3.0 (https://www.gnu.org/licenses/agpl-3.0.en.html)
 *
 *     Copyright (C) 2017 Ganlv
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as
 *     published by the Free Software Foundation, either version 3 of the
 *     License, or (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var TiebaEmotion = TiebaEmotion || {};

TiebaEmotion.LIST = [];
/**
 * 准备替换列表
 */
TiebaEmotion.prepare = function () {
    var k = 0;
    for (var i = 0; i < TiebaEmotion.DATA.sequence.length; ++i) {
        var item = TiebaEmotion.DATA.emotionConfig[TiebaEmotion.DATA.sequence[i]];
        if (!item.tip || !item.num || !item.folder || !item.prev || !item.suffix || item.type !== 'img') {
            continue;
        }
        /**
         * 数字加前缀0
         * @param {number} index 列表中的第几个
         * @param {number} count 列表中总共几个
         * @return {string}
         */
        var numToString = function (index, count) {
            index = index + 1;
            return (count >= 10 && index < 10) ? '0' + index : index;
        };
        for (var j = 0; j < item.tip.length; ++j) {
            if (!item.tip[j]) {
                continue;
            }
            TiebaEmotion.LIST.push({
                index: k++, // 记录序号，用于排序
                search: '#' + item.tip[j],
                src: TiebaEmotion.DATA.path + item.folder + item.prev + numToString(j, item.num) + '.' + item.suffix
            });
        }
    }
    TiebaEmotion.LIST = TiebaEmotion.LIST.sort(function (a, b) {
        // 长字符串优先替换
        if (b.search.length != a.search.length) {
            return b.search.length - a.search.length;
        }
        // 基本表情优先于扩展表情
        return a.index - b.index;
    });
    TiebaEmotion.LIST_LENGTH = TiebaEmotion.LIST.length;
};
TiebaEmotion.prepare();
/**
 * 递归搜索指定HTML元素
 * @param {HTMLElement} element
 */
TiebaEmotion.replaceRecursive = function (element) {
    for (var i = 0; i < element.childNodes.length; ++i) {
        switch (element.childNodes[i].nodeType) {
            case Node.ELEMENT_NODE:
                // 如果是元素节点则继续递归搜索
                if (element.childNodes[i].contentEditable == 'true' || element.childNodes[i].nodeName == 'TEXTAREA') {
                    // 如果是可编辑元素则跳过
                    continue;
                }
                TiebaEmotion.replaceRecursive(element.childNodes[i]);
                break;
            case Node.TEXT_NODE:
                // 如果是文本节点则进行替换
                for (var j = 0; j < TiebaEmotion.LIST_LENGTH; ++j) {
                    // 用指定搜索字符串进行分割
                    var textNodes = element.childNodes[i].textContent.split(TiebaEmotion.LIST[j].search);
                    if (textNodes.length <= 1) {
                        // 分割之后只有一个则跳过
                        continue;
                    }
                    // 最后一个元素，并从队列中弹出一个子串
                    element.childNodes[i].textContent = textNodes.pop();
                    // 从后向前，插入一个表情，再插入一个子串并弹出
                    while (textNodes.length) {
                        var img = document.createElement('img');
                        img.className = 'tieba-emotion';
                        img.dataset.text = TiebaEmotion.LIST[j].search;
                        img.src = TiebaEmotion.LIST[j].src;
                        element.insertBefore(img, element.childNodes[i]);
                        element.insertBefore(document.createTextNode(textNodes.pop()), element.childNodes[i]);
                    }
                }
                break;
        }
    }
};
/**
 * 对整个文档进行表情替换
 */
TiebaEmotion.replaceAll = function () {
    TiebaEmotion.replaceRecursive(document.body);
};
