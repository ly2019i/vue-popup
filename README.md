#  安装
    npm install vue-popup

### 可选参数
|   参数    |   说明    |   可选参数    |   参数类型    |
|   -       |    :-     |    :-         |       :-     |    :-:    |
|   type    |   弹窗形式    |   confirm、toast(默认为confirm)   |   String  |
|   buttonConfirmText |   确认按钮文本  |   -    |   String  |
|   buttonCancelText |   取消按钮文本  |   -    |   String  |
|   showTitle |   是否显示标题  |   默认为true    |   Boolean  |
|   titleText |   标题文本  |   ''    |   String  |
|   content |   弹窗内容  |   ''    |   String  |
|   showCloseBtn |   是否显示关闭按钮  |   默认为true    |   Boolean  |
|   position |   弹出的位置  |   center、left、right、top、bottom(默认为center)    |   String  |
|   autoClose |   弹窗自动关闭时间  |   默认为3秒    |   Number  |

### 回调函数
  函数名称    |   说明    |   返回值类型    |   参数类型
  ---|:--:|:--:|---:
   buttonCallback |   点击确认按钮的回调函数  |   true    |   Boolean

<!-- 插件内容
    confirm toast else
外部参数
    type  //  弹窗形式 （上边三种）
    buttonConfirmText  //  确认按钮值
    buttonCancelText   //  否定按钮值
    buttonCallback  //  点击确认按钮回调函数
    showTitle //  是否显示标题  默认 true
    titleText //  弹窗名字
    content  //  弹窗内容
    showCloseBtn  //  显示关闭按钮  默认 true
    position   // 弹窗位置  默认 center
    autoClose   //  弹窗自动关闭事件   默认 3秒 -->