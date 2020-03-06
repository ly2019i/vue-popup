<template>
  <transition name="toast">
    <div class="popup" v-show="display">
      <div class="popup_bg"></div>
      <div class="popup_box" :class="position" @click.self="hide">
        <!-- toast的结构 -->
        <div class="popup_content toast" v-if="type == 'toast'">
          <div class="content">
            <div class="icons" v-if="showToastIcon">
              <span
                v-if="toastState == 'success'"
                class="iconfont icon-chenggong"
              ></span>
              <span
                v-if="toastState == 'fail'"
                class="iconfont icon-shibai"
              ></span>
            </div>
            {{ content }}
          </div>
        </div>
        <!-- confirm的结构 -->
        <div class="popup_content" v-if="type == 'confirm'">
          <div class="close" @click="hide" v-if="showCloseBtn">X</div>
          <p class="title">{{ titleText }}</p>
          <div class="content">
            {{ content }}
          </div>
          <div class="btns">
            <button @click="cancel" class="cancel">
              {{ buttonCancelText }}
            </button>
            <button @click="confirm">{{ buttonConfirmText }}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import "./iconfont/iconfont";
let POPUP_POSITION = "center";

let TYPE_CONFIRM = "confirm";
let TYPE_TOAST = "toast";
let TYPE_ELSE = "else";

let BUTTON_CONFIRM_TEXT = "确定";
let BUTTON_CANCEL_TEXT = "取消";
let TOAST_STATE = "";
export default {
  name: "vue-popup",
  props: {
    type: {
      type: String,
      default() {
        return TYPE_CONFIRM;
      }
    },
    position: {
      type: String,
      default() {
        return POPUP_POSITION;
      }
    },
    buttonConfirmText: {
      type: String,
      default() {
        return BUTTON_CONFIRM_TEXT;
      }
    },
    buttonCancelText: {
      type: String,
      default() {
        return BUTTON_CANCEL_TEXT;
      }
    },
    showTitle: {
      type: Boolean,
      default() {
        return true;
      }
    },
    titleText: {
      type: String,
      default() {
        return "弹窗";
      }
    },
    content: {
      type: String,
      default() {
        return "弹窗内容";
      }
    },
    showCloseButton: {
      type: Boolean,
      default() {
        return true;
      }
    },
    autoClose: {
      type: Number,
      default() {
        return 3;
      }
    },
    showToastIcon: {
      type: Boolean,
      default() {
        return false;
      }
    },
    toastState: {
      type: String,
      default() {
        return TOAST_STATE;
      }
    }
  },
  data() {
    return {
      display: false
    };
  },
  computed: {
    showCloseBtn: function() {
      if (this.$props.position !== "center" || this.$props.type !== "confirm") {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    type: function(data) {
      if (data == "toast") {
        this.autoClosePopup();
      }
    }
  },
  methods: {
    show() {
      this.display = true;
      if (this.$props.type == "toast") {
        clearTimeout(this.timer);
        this.autoClosePopup();
      }
    },
    hide() {
      this.display = false;
      clearTimeout(this.timer);
    },
    confirm() {
      this.hide();
      this.$emit("buttonCallback", true);
    },
    autoClosePopup() {
      this.timer = setTimeout(() => {
        this.hide();
      }, this.$props.autoClose * 1000);
    },
    cancel() {
      this.hide();
      this.$emit("buttonCallback", false);
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("./iconfont/iconfont.css");
.toast-enter-active,
.toast-leave-active {
  transition: opacity 1s;
}
.toast-enter, .toast-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
p {
  margin: 0;
  padding: 0;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  text-align: left;
  .popup_bg {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .popup_box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
  }
  .toast {
    width: 80px;
    min-width: 0px !important;
    word-wrap: break-word;
  }
  .popup_content {
    padding: 10px 15px;
    background: #fff;
    position: relative;
    z-index: 10;
    min-width: 150px;
    max-width: 70%;
    border-radius: 10px;
    .close {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      right: -12px;
      top: -12px;
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      background: red;
      color: #fff;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      .cancel {
        color: #cecece;
      }
      button {
        font-size: 14px;
        border: none;
        background: none;
        color: blue;
        margin-top: 10px;
      }
    }
    .title {
      font-size: 18px;
      line-height: 30px;
    }
    .content {
      font-size: 12px;
      line-height: 16px;
      margin: 10px 0;
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
  }
}
.center {
  align-items: center;
  justify-content: center;
}
.bottom {
  flex-direction: column-reverse;
  align-items: center;
  .popup_content {
    max-width: 100% !important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.top {
  flex-direction: column;
}
</style>
