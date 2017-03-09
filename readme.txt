=== Tieba Emotion ===
Contributors: ganlv
Donate link: http://www.dreamimd.com/donate
Tags: comments, emoticon, tieba
Requires at least: 2.1.0
Tested up to: 4.7
Stable tag: 1.0
License: AGPLv3
License URI: https://www.gnu.org/licenses/agpl-3.0.en.html

贴吧表情替换，自动将所有例如 #滑稽 的文字替换成表情图片

== Description ==

自动将所有例如`#滑稽`的文字替换成表情图片，你可以在整个页面的任何位置使用`#表情代码`，只会替换前台页面和后台管理页面，登录页面不会进行替换。

完整的表情代码列表可以参见<https://ganlvtech.github.io/tieba-emotion/>，此列表与Baidu Tieba的表情代码相同。

这个插件只是一些js脚本，没有具体的php代码，php只负责将css和js插入队列。

您可以修改`js/script.js`，使此插件只替换页面中某个div中所有的`#表情代码`。

您可以修改`css/style.css`，默认使用2倍行高作为表情图片的大小。

您可以将`js/tieba-emotion.js`单独用于您自己其他的（非WordPress）用途，只要您遵守本项目的开源许可证。

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/tieba-emotion/` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

== Screenshots ==

1. /assets/screenshot-1.png

== Changelog ==

= 1.0 =
* Plugin published.

== Upgrade Notice ==

= 1.0 =
