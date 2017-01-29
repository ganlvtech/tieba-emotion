<?php
/*
Plugin Name: Tieba Emotion
Plugin URI: http://www.dreamimd.com/
Description: 贴吧表情前端替换
Version: 1.0.1
Author: Ganlv
Author URI: https://github.com/ganlvtech
License: AGPL-3.0 (https://www.gnu.org/licenses/agpl-3.0.en.html)

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
*/
wp_enqueue_style('tieba-emotion', plugins_url('css/style.css', __FILE__), array(), '0.1');
wp_enqueue_script('tieba-emotion-data', plugins_url('js/tieba-emotion-data.js', __FILE__), array(), '0.1', true);
wp_enqueue_script('tieba-emotion', plugins_url('js/tieba-emotion.js', __FILE__), array('tieba-emotion-data'), '1.0.1', true);
wp_enqueue_script('tieba-emotion-content-script', plugins_url('js/script.js', __FILE__), array('tieba-emotion'), '1.0', true);
