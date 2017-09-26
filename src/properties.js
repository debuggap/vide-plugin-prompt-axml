var context = {
  "view": [{
    "name": "hover-class",
    "value": "hover-class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击时添加的样式类"
  }, {
    "name": "hover-start-time",
    "value": "hover-start-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "按住多久后出现点击状态，单位毫秒"
  }, {
    "name": "hover-stay-time",
    "value": "hover-stay-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "松开后点击状态保留时间，单位毫秒"
  }, {
    "name": "hidden",
    "value": "hidden=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否隐藏"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "自定义样式名"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }, {
    "name": "animation",
    "value": "animation=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "用于动画，详见 my.createAnimation"
  }, {
    "name": "onTap",
    "value": "onTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击"
  }, {
    "name": "onTouchStart",
    "value": "onTouchStart=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作开始"
  }, {
    "name": "onTouchMove",
    "value": "onTouchMove=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸后移动"
  }, {
    "name": "onTouchEnd",
    "value": "onTouchEnd=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作结束"
  }, {
    "name": "onTouchCancel",
    "value": "onTouchCancel=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作被打断，如来电提醒，弹窗"
  }, {
    "name": "onLongTap",
    "value": "onLongTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动"
  }],
  "swiper": [{
    "name": "indicator-dots",
    "value": "indicator-dots=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否显示指示点"
  }, {
    "name": "indicator-color",
    "value": "indicator-color=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "rgba(0, 0, 0, .3)",
    "info": "指示点颜色"
  }, {
    "name": "indicator-active-color",
    "value": "indicator-active-color=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "#000",
    "info": "当前选中的指示点颜色"
  }, {
    "name": "autoplay",
    "value": "autoplay=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否自动切换"
  }, {
    "name": "current",
    "value": "current=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "0",
    "info": "当前页面的 index"
  }, {
    "name": "duration",
    "value": "duration=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "500",
    "info": "滑动动画时长"
  }, {
    "name": "interval",
    "value": "interval=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "5000",
    "info": "自动切换时间间隔"
  }, {
    "name": "circular",
    "value": "circular=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否启用无限滑动"
  }, {
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "否",
    "info": "current 改变时会触发，event.detail = {current: current}"
  }],
  "text": [{
    "name": "selectable",
    "value": "selectable=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否可选"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "样式名"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }],
  "icon": [{
    "name": "type",
    "value": "type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "icon 类型，有效值： info, warn, waiting, cancel, download, search, clear, success, success_no_circle"
  }, {
    "name": "size",
    "value": "size=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "23",
    "info": "icon 大小，单位px"
  }, {
    "name": "color",
    "value": "color=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "icon 颜色，同 css 的 color"
  }],
  "progress": [{
    "name": "percent",
    "value": "percent=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "百分比(0~100)"
  }, {
    "name": "show-info",
    "value": "show-info=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "在右侧显示百分比值"
  }, {
    "name": "stroke-width",
    "value": "stroke-width=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "6",
    "info": "线的粗细，单位 px"
  }, {
    "name": "activeColor",
    "value": "activeColor=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "#09BB07",
    "info": "已选择的进度条颜色"
  }, {
    "name": "backgroundColor",
    "value": "backgroundColor=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "未选择的进度条颜色"
  }, {
    "name": "active",
    "value": "active=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "从左往右是否进行加载动画"
  }],
  "switch": [{
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }, {
    "name": "checked",
    "value": "checked=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "是否选中"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "是否禁用"
  }, {
    "name": "color",
    "value": "color=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件颜色"
  }, {
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "checked 改变时触发，event.detail={ value:checked}"
  }],
  "slider": [{
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }, {
    "name": "min",
    "value": "min=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "0",
    "info": "最小值"
  }, {
    "name": "max",
    "value": "max=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "100",
    "info": "最大值"
  }, {
    "name": "step",
    "value": "step=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "1",
    "info": "步长，值必须大于 0，并可被(max - min)整除"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }, {
    "name": "value",
    "value": "value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "0",
    "info": "当前取值"
  }, {
    "name": "show-value",
    "value": "show-value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否显示当前 value"
  }, {
    "name": "activeColor",
    "value": "activeColor=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "已选择的颜色"
  }, {
    "name": "backgroundColor",
    "value": "backgroundColor=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "背景条的颜色"
  }, {
    "name": "trackSize",
    "value": "trackSize=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "轨道线条高度"
  }, {
    "name": "handleSize",
    "value": "handleSize=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "滑块大小"
  }, {
    "name": "handleColor",
    "value": "handleColor=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "滑块填充色"
  }, {
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "完成一次拖动后触发，event.detail = {value: value}"
  }],
  "textarea": [{
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }, {
    "name": "value",
    "value": "value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "初始内容"
  }, {
    "name": "placeholder",
    "value": "placeholder=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "占位符"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "样式名"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }, {
    "name": "maxlength",
    "value": "maxlength=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "140",
    "info": "最大长度"
  }, {
    "name": "focus",
    "value": "focus=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "获取焦点"
  }, {
    "name": "auto-height",
    "value": "auto-height=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否自动增高"
  }, {
    "name": "onInput",
    "value": "onInput=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "键盘输入时触发，event.detail = {value: value}，可以直接 return 一个字符串以替换输入框的内容"
  }, {
    "name": "onFocus",
    "value": "onFocus=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "输入框聚焦时触发 event.detail = {value: value}"
  }, {
    "name": "onBlur",
    "value": "onBlur=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "输入框失去焦点时触发，event.detail = {value: value}"
  }, {
    "name": "onConfirm",
    "value": "onConfirm=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击完成时触发，event.detail = {value: value}"
  }],
  "label": [{
    "name": "for",
    "value": "for=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "绑定组件的 id",
    "info": ""
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "外部样式",
    "info": ""
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "内联样式",
    "info": ""
  }],
  "radio-group": [{
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "选中项发生变化时触发，event.detail = {value: 选中项radio的value}"
  }, {
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }],
  "radio": [{
    "name": "value",
    "value": "value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件值，选中时 change 事件会携带的 value"
  }, {
    "name": "checked",
    "value": "checked=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "当前是否选中"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }],
  "input": [{
    "name": "value",
    "value": "value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "初始内容"
  }, {
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "外部样式名"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }, {
    "name": "type",
    "value": "type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "text",
    "info": "input 的类型，有效值：text, number, idcard, digit"
  }, {
    "name": "password",
    "value": "password=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否是密码类型"
  }, {
    "name": "placeholder",
    "value": "placeholder=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "占位符"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }, {
    "name": "maxlength",
    "value": "maxlength=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "140",
    "info": "最大长度"
  }, {
    "name": "focus",
    "value": "focus=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "获取焦点"
  }, {
    "name": "onInput",
    "value": "onInput=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "键盘输入时触发input事件，event.detail = {value: value}"
  }, {
    "name": "onConfirm",
    "value": "onConfirm=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击键盘完成时触发，event.detail = {value: value}"
  }, {
    "name": "onFocus",
    "value": "onFocus=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "聚焦时触发，event.detail = {value: value}"
  }, {
    "name": "onBlur",
    "value": "onBlur=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "失去焦点时触发，event.detail = {value: value}"
  }],
  "checkbox-group": [{
    "name": "name",
    "value": "name=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件名字，用于表单提交获取数据"
  }, {
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "中选中项发生改变时触发，detail = {value: 选中的checkbox项value的值}"
  }],
  "checkbox": [{
    "name": "value",
    "value": "value=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件值，选中时 change 事件会携带的 value"
  }, {
    "name": "checked",
    "value": "checked=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "当前是否选中，可用来设置默认选中"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }, {
    "name": "onChange",
    "value": "onChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件发生改变时触发，detail = {value: 该 checkbox 是否 checked}"
  }],
  "form": [{
    "name": "onSubmit",
    "value": "onSubmit=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}"
  }, {
    "name": "onReset",
    "value": "onReset=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "表单重置时会触发 reset 事件"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "外部样式名"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }],
  "button": [{
    "name": "size",
    "value": "size=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "default",
    "info": "有效值 default, mini"
  }, {
    "name": "open-type",
    "value": "open-type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "开放能力"
  }, {
    "name": "type",
    "value": "type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "default",
    "info": "按钮的样式类型，有效值 primary, default, warn"
  }, {
    "name": "plain",
    "value": "plain=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否镂空"
  }, {
    "name": "disabled",
    "value": "disabled=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "是否禁用"
  }, {
    "name": "loading",
    "value": "loading=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "按钮文字前是否带 loading 图标"
  }, {
    "name": "onTap",
    "value": "onTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击"
  }, {
    "name": "form-type",
    "value": "form-type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "有效值：submit, reset，用于  组件，点击分别会触发 submit/reset 事件"
  }, {
    "name": "hover-class",
    "value": "hover-class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "button-hover",
    "info": "按钮按下去的样式类。hover-class=\"none\" 时表示没有点击态效果"
  }, {
    "name": "hover-start-time",
    "value": "hover-start-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "20",
    "info": "按住后多少事件后出现点击状态，单位毫秒"
  }, {
    "name": "hover-stay-time",
    "value": "hover-stay-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "70",
    "info": "手指松开后点击状态保留时间，单位毫秒"
  }],
  "navigator": [{
    "name": "hover-class",
    "value": "hover-class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "none",
    "info": "点击时附加的类"
  }, {
    "name": "hover-start-time",
    "value": "hover-start-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "按住后多事件后出现点击状态，单位毫秒"
  }, {
    "name": "hover-stay-time",
    "value": "hover-stay-time=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "手指松开后点击状态保留时间，单位毫秒"
  }, {
    "name": "url",
    "value": "url=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "应用内的跳转链接"
  }, {
    "name": "open-type",
    "value": "open-type=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "navigate",
    "info": "跳转方式"
  }],
  "image": [{
    "name": "src",
    "value": "src=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "图片地址"
  }, {
    "name": "mode",
    "value": "mode=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "scaleToFill",
    "info": "图片模式"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "外部样式",
    "info": ""
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "内联样式",
    "info": ""
  }, {
    "name": "onError",
    "value": "onError=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "当图片加载错误时触发，事件对象event.detail = {errMsg: 'something wrong'}"
  }, {
    "name": "onLoad",
    "value": "onLoad=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "图片载入完毕时触发，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}"
  }],
  "canvas": [{
    "name": "id",
    "value": "id=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "组件唯一标识符"
  }, {
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": ""
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": ""
  }, {
    "name": "width",
    "value": "width=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "canvas width attribute",
    "info": ""
  }, {
    "name": "height",
    "value": "height=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "canvas height attribute",
    "info": ""
  }, {
    "name": "disable-scroll",
    "value": "disable-scroll=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "false",
    "info": "禁止屏幕滚动以及下拉刷新"
  }, {
    "name": "onTap",
    "value": "onTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击"
  }, {
    "name": "onTouchStart",
    "value": "onTouchStart=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作开始"
  }, {
    "name": "onTouchMove",
    "value": "onTouchMove=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸后移动"
  }, {
    "name": "onTouchEnd",
    "value": "onTouchEnd=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作结束"
  }, {
    "name": "onTouchCancel",
    "value": "onTouchCancel=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "触摸动作被打断，如来电提醒，弹窗"
  }, {
    "name": "onLongTap",
    "value": "onLongTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动"
  }],
  "map": [{
    "name": "style",
    "value": "style=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "内联样式"
  }, {
    "name": "class",
    "value": "class=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "样式名"
  }, {
    "name": "longitude",
    "value": "longitude=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "中心经度"
  }, {
    "name": "latitude",
    "value": "latitude=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "中心纬度"
  }, {
    "name": "scale",
    "value": "scale=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "16",
    "info": "缩放级别，范围为5 ~ 18"
  }, {
    "name": "markers",
    "value": "markers=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "标记点"
  }, {
    "name": "polyline",
    "value": "polyline=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "路线"
  }, {
    "name": "circles",
    "value": "circles=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "圆"
  }, {
    "name": "controls",
    "value": "controls=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "控件"
  }, {
    "name": "polygon",
    "value": "polygon=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "多边形"
  }, {
    "name": "include-points",
    "value": "include-points=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "缩放视野以包含所有给定的坐标点"
  }, {
    "name": "show-location",
    "value": "show-location=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "是否显示带有方向的当前定位点"
  }, {
    "name": "onMarkerTap",
    "value": "onMarkerTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击标记点时触发"
  }, {
    "name": "onCalloutTap",
    "value": "onCalloutTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击标记点对应的气泡时触发"
  }, {
    "name": "onControlTap",
    "value": "onControlTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击控件时触发"
  }, {
    "name": "onRegionChange",
    "value": "onRegionChange=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "视野发生变化时触发，{type: \"begin\" / \"end\", latitude，longitude， scale}"
  }, {
    "name": "onTap",
    "value": "onTap=\"\"",
    "moveAction": [0, -1],
    "defaultValue": "",
    "info": "点击地图时触发"
  }]
}

var desc = {
  "view": "<h3>View</h3><p>视图容器。相当于 web 的 div 或者 react-native 的 View。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"200\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>hover-class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击时添加的样式类</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-start-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>按住多久后出现点击状态，单位毫秒</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-stay-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>松开后点击状态保留时间，单位毫秒</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hidden</div></td>\n      <td width=\"90\"><div>boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否隐藏</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>自定义样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>animation</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>用于动画，详见 my.createAnimation</div></td>\n    </tr>\n\t<tr>\n      <td width=\"90\"><div>onTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchStart</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作开始</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchMove</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸后移动</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchEnd</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作结束</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchCancel</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作被打断，如来电提醒，弹窗</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onLongTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "swiper": "<h3>Swiper</h3><p>滑块视图容器。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>indicator-dots</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否显示指示点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>indicator-color</div></td>\n      <td width=\"90\"><div>Color</div></td>\n      <td width=\"90\"><div>rgba(0, 0, 0, .3)</div></td>\n      <td width=\"90\"><div>指示点颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>indicator-active-color</div></td>\n      <td width=\"90\"><div>Color</div></td>\n      <td width=\"90\"><div>#000</div></td>\n      <td width=\"90\"><div>当前选中的指示点颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>autoplay</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否自动切换</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>current</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>0</div></td>\n      <td width=\"90\"><div>当前页面的 index</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>duration</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>500</div></td>\n      <td width=\"90\"><div>滑动动画时长</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>interval</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>5000</div></td>\n      <td width=\"90\"><div>自动切换时间间隔</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>circular</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否启用无限滑动</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>Function</div></td>\n      <td width=\"90\"><div>否</div></td>\n      <td width=\"90\"><div>current 改变时会触发，event.detail = {current: current}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "swiper-item": "<h3>swiper-item</h3><p>仅可放置在组件中，宽高自动设置为100%。</p><h3><span class=\"octicon octicon-link\"></span> Sceenshot</h3><p><img src=\"https://zos.alipayobjects.com/rmsportal/VPdDdvxbkrQVNOxXUuqR.png\" alt=\"image\" class=\"align-center\"></p><h3><span class=\"octicon octicon-link\"></span> 示例代码：</h3>",
  "text": "<h3>Text</h3><p>文本。</p><p>组件内只支持  嵌套。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>selectable</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否可选</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "icon": "<h3>Icon</h3><p>图标。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>icon 类型，有效值： info, warn, waiting, cancel, download, search, clear, success, success_no_circle</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>size</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>23</div></td>\n      <td width=\"90\"><div>icon 大小，单位px</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>color</div></td>\n      <td width=\"90\"><div>Color</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>icon 颜色，同 css 的 color</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "progress": "<h3>Progress</h3><p>进度条。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>percent</div></td>\n      <td width=\"90\"><div>Float</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>百分比(0~100)</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>show-info</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>在右侧显示百分比值</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>stroke-width</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>6</div></td>\n      <td width=\"90\"><div>线的粗细，单位 px</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>activeColor</div></td>\n      <td width=\"90\"><div>Color</div></td>\n      <td width=\"90\"><div>#09BB07</div></td>\n      <td width=\"90\"><div>已选择的进度条颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>backgroundColor</div></td>\n      <td width=\"90\"><div>Color</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>未选择的进度条颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>active</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>从左往右是否进行加载动画</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "switch": "<h3>Switch</h3><p>单选项目。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>checked</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>是否选中</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>color</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>checked 改变时触发，event.detail={ value:checked}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "slider": "<h3>Slider</h3><p>滑动选择器。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>min</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>0</div></td>\n      <td width=\"90\"><div>最小值</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>max</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>100</div></td>\n      <td width=\"90\"><div>最大值</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>step</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>1</div></td>\n      <td width=\"90\"><div>步长，值必须大于 0，并可被(max - min)整除</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>value</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>0</div></td>\n      <td width=\"90\"><div>当前取值</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>show-value</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否显示当前 value</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>activeColor</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>已选择的颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>backgroundColor</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>背景条的颜色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>trackSize</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>轨道线条高度</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>handleSize</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>滑块大小</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>handleColor</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>滑块填充色</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>完成一次拖动后触发，event.detail = {value: value}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "textarea": "<h3>Textarea</h3><p>输入框。</p><p>属性名</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div></div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>value</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>初始内容</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>placeholder</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>占位符</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>maxlength</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>140</div></td>\n      <td width=\"90\"><div>最大长度</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>focus</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>获取焦点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>auto-height</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否自动增高</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onInput</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>键盘输入时触发，event.detail = {value: value}，可以直接 return 一个字符串以替换输入框的内容</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onFocus</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>输入框聚焦时触发 event.detail = {value: value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onBlur</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>输入框失去焦点时触发，event.detail = {value: value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onConfirm</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击完成时触发，event.detail = {value: value}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "label": "<h3>Label</h3><p><code>Label</code> 可以用来改进表单组件的可用性，使用 <code>for</code> 属性找到对应组件的 <code>id</code>，或者将组件放在该标签下，当点击时，就会聚焦对应的组件。</p><p><code>for</code> 优先级高于内部组件，内部有多个组件的时候默认触发第一个组件。</p><p>目前可以绑定的控件有：<code><checkbox/>, <radio/>, <input/>, <textarea/></code></p><div><table>\n   <thead>\n    <tr>\n      <th width=\"200\"><div>属性名</div></th>\n      <th width=\"200\"><div>类型</div></th>\n      <th width=\"200\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"200\"><div>for</div></td>\n      <td width=\"200\"><div>String</div></td>\n      <td width=\"200\"><div>绑定组件的 id</div></td>\n    </tr>\n    <tr>\n      <td width=\"200\"><div>class</div></td>\n      <td width=\"200\"><div>String</div></td>\n      <td width=\"200\"><div>外部样式</div></td>\n    </tr>\n    <tr>\n      <td width=\"200\"><div>style</div></td>\n      <td width=\"200\"><div>String</div></td>\n      <td width=\"200\"><div>内联样式</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "radio-group": "<h3>radio-group</h3><p>单项选择器组。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div> 选中项发生变化时触发，event.detail = {value: 选中项radio的value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "radio": "<h3>radio</h3><p>单选项目。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>value</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件值，选中时 change 事件会携带的 value</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>checked</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>当前是否选中</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "input": "<h3>Input</h3><p>输入框。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>value</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>初始内容</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>外部样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>text</div></td>\n      <td width=\"90\"><div>input 的类型，有效值：text, number, idcard, digit</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>password</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否是密码类型</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>placeholder</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>占位符</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>maxlength</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>140</div></td>\n      <td width=\"90\"><div>最大长度</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>focus</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>获取焦点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onInput</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>键盘输入时触发input事件，event.detail = {value: value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onConfirm</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击键盘完成时触发，event.detail = {value: value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onFocus</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>聚焦时触发，event.detail = {value: value}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onBlur</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>失去焦点时触发，event.detail = {value: value}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "checkbox-group": "<h3>checkbox-group</h3><p>多项选择器组。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>name</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件名字，用于表单提交获取数据</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>中选中项发生改变时触发，detail = {value: 选中的checkbox项value的值}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "checkbox": "<h3>checkbox</h3><p>多选项目</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>value</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件值，选中时 change 事件会携带的 value</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>checked</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>当前是否选中，可用来设置默认选中</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件发生改变时触发，detail = {value: 该 checkbox 是否 checked}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "form": "<h3>Form</h3><p>表单，用于将组件内的用户输入的 <code><textarea></code>、 <code><switch/></code>、 <code><input/></code> 、<code><checkbox-group/></code>、<code><slider/></code>、<code><radio-group/></code>、<code><picker/></code> 等组件提交。</p><p>当点击 <code>form</code> 表单中 <code>formType</code> 为 <code>submit</code> 的 <code>button</code> 组件时，会将表单组件中的 <code>value</code> 值进行提交，需要在表单组件中加上 <code>name</code> 来作为 <code>key</code>。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"200\"><div>onSubmit</div></td>\n      <td width=\"200\"><div>EventHandle</div></td>\n      <td width=\"200\"><div></div></td>\n      <td width=\"200\"><div>携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}</div></td>\n    </tr>\n    <tr>\n      <td width=\"200\"><div>onReset</div></td>\n      <td width=\"200\"><div>EventHandle</div></td>\n      <td width=\"200\"><div></div></td>\n      <td width=\"200\"><div>表单重置时会触发 reset 事件</div></td>\n    </tr>\n    <tr>\n      <td width=\"200\"><div>class</div></td>\n      <td width=\"200\"><div>String</div></td>\n      <td width=\"200\"><div></div></td>\n      <td width=\"200\"><div>外部样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"200\"><div>style</div></td>\n      <td width=\"200\"><div>String</div></td>\n      <td width=\"200\"><div></div></td>\n      <td width=\"200\"><div>内联样式</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "button": "<h3>Button</h3><p>按钮。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"290\"><div>描述</div></th>\n\t  <th width=\"90\"><div>最低版本</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>size</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>default</div></td>\n      <td width=\"90\"><div>有效值 default, mini</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n\t<tr>\n      <td width=\"90\"><div>open-type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\">\n\t  <div>\n\t    开放能力\n\t  </div>\n\t  </td>\n\t  <td width=\"90\"><div>1.1.0</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>default</div></td>\n      <td width=\"90\"><div>按钮的样式类型，有效值 primary, default, warn</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>plain</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否镂空</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disabled</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>是否禁用</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>loading</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>按钮文字前是否带 loading 图标</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>form-type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>有效值：submit, reset，用于  组件，点击分别会触发 submit/reset 事件</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>button-hover</div></td>\n      <td width=\"90\"><div>按钮按下去的样式类。hover-class=\"none\" 时表示没有点击态效果</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-start-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>20</div></td>\n      <td width=\"90\"><div>按住后多少事件后出现点击状态，单位毫秒</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-stay-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>70</div></td>\n      <td width=\"90\"><div>手指松开后点击状态保留时间，单位毫秒</div></td>\n\t  <td width=\"90\"><div></div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "picker": "<h3>Picker</h3><p>从底部弹起的滚动选择器。</p>",
  "navigator": "<h3>Navigator</h3><p>页面链接。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>hover-class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>none</div></td>\n      <td width=\"90\"><div>点击时附加的类</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-start-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>按住后多事件后出现点击状态，单位毫秒</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>hover-stay-time</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>手指松开后点击状态保留时间，单位毫秒</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>url</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>应用内的跳转链接</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>open-type</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>navigate</div></td>\n      <td width=\"90\"><div>跳转方式</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "image": "<h3>Image</h3><p>图片。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>描述</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>src</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>图片地址</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>mode</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>scaleToFill</div></td>\n      <td width=\"90\"><div>图片模式</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>外部样式</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onError</div></td>\n      <td width=\"90\"><div>HandleEvent</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>当图片加载错误时触发，事件对象event.detail = {errMsg: 'something wrong'}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onLoad</div></td>\n      <td width=\"90\"><div>HandleEvent</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>图片载入完毕时触发，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "canvas": "<h3>Canvas</h3><p>画布。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>说明</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>id</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>组件唯一标识符</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>width</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>canvas width attribute</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>height</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div>canvas height attribute</div></td>\n      <td width=\"90\"><div></div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>disable-scroll</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div>false</div></td>\n      <td width=\"90\"><div>禁止屏幕滚动以及下拉刷新</div></td>\n    </tr>\n\t<tr>\n      <td width=\"90\"><div>onTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchStart</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作开始</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchMove</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸后移动</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchEnd</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作结束</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTouchCancel</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>触摸动作被打断，如来电提醒，弹窗</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onLongTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动</div></td>\n    </tr>\n   </tbody>\n </table></div>",
  "map": "<h3>Map</h3><p>地图。</p><div><table>\n   <thead>\n    <tr>\n      <th width=\"90\"><div>属性名</div></th>\n      <th width=\"90\"><div>类型</div></th>\n      <th width=\"90\"><div>默认值</div></th>\n      <th width=\"90\"><div>说明</div></th>\n    </tr>\n   </thead>\n   <tbody>\n    <tr>\n      <td width=\"90\"><div>style</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>内联样式</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>class</div></td>\n      <td width=\"90\"><div>String</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>样式名</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>longitude</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>中心经度</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>latitude</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>中心纬度</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>scale</div></td>\n      <td width=\"90\"><div>Number</div></td>\n      <td width=\"90\"><div>16</div></td>\n      <td width=\"90\"><div>缩放级别，范围为5 ~ 18</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>markers</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>标记点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>polyline</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>路线</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>circles</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>圆</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>controls</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>控件</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>polygon</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>多边形</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>include-points</div></td>\n      <td width=\"90\"><div>Array</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>缩放视野以包含所有给定的坐标点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>show-location</div></td>\n      <td width=\"90\"><div>Boolean</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>是否显示带有方向的当前定位点</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onMarkerTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击标记点时触发</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onCalloutTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击标记点对应的气泡时触发</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onControlTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击控件时触发</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onRegionChange</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>视野发生变化时触发，{type: \"begin\" / \"end\", latitude，longitude， scale}</div></td>\n    </tr>\n    <tr>\n      <td width=\"90\"><div>onTap</div></td>\n      <td width=\"90\"><div>EventHandle</div></td>\n      <td width=\"90\"><div></div></td>\n      <td width=\"90\"><div>点击地图时触发</div></td>\n    </tr>\n   </tbody>\n </table></div>"
}

module.exports = {
  context,
  desc
}