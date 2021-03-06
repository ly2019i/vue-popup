## 安装

    npm install vue-popup

## 引入

    import vue_popup from 'vue-popup'
    Vue.use(vue_popup)

## 使用

    <vue-popup position="center" ref="popup" type="confirm" @buttonCallback="getBtnCallBack" content="test">
    </vue-popup>

## 介绍

    支持Toast、confirm两种形式

### PROPS

| 参数              |               说明               |              可选参数              | 参数类型 |
| ----------------- | :------------------------------: | :--------------------------------: | -------: |
| type              |             弹窗形式             |   confirm、toast(默认为 confirm)   |   String |
| buttonConfirmText |           确认按钮文本           |                 -                  |   String |
| buttonCancelText  |           取消按钮文本           |                 -                  |   String |
| showTitle         |           是否显示标题           |            默认为 true             |  Boolean |
| titleText         |             标题文本             |                 ''                 |   String |
| content           |             弹窗内容             |                 ''                 |   String |
| showCloseBtn      |         是否显示关闭按钮         |            默认为 true             |  Boolean |
| position          |            弹出的位置            | center、top、bottom(默认为 center) |   String |
| autoClose         |     Toast 的弹窗自动关闭时间     |            默认为 3 秒             |   Number |
| showToastIcon     |      是否显示 toast 的图标       |      true,false(默认为 true)       |  Boolean |
| toastState        | toast 图标的状态（成功或者失败） |            success,fail            |   String |

### 回调函数

| 函数名称       |          说明          | 返回值类型 | 参数类型 |
| -------------- | :--------------------: | :--------: | -------: |
| buttonCallback | 点击确认按钮的回调函数 |    true    |  Boolean |
