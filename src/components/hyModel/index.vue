<template>
  <view class="hy-main">
    <view class="hy-main-pop" v-if="isShowpop"></view>
    <view class="hy-main-content" v-if="value">
      <view class="hy-main-content-header">
          提示
        <view class="hy-main-content-header-closed"  @click="cancel"> x </view>
      </view>
      <view class="hy-main-content-box">
        <slot></slot>
      </view>
      <view class="hy-main-content-footer">
        <view class="hy-main-content-footer-cancel" @click="cancel">取消</view>
        <view class="hy-main-content-footer-confirm" @click="confirm">确认</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props:{
    showpop:{
      type:Boolean,
      default:false
    },
    value:{
      type:Boolean,
      default:false
    },
  },
  data(){
    return{
      isShowpop:false
    }
  },
  watch:{
    value(){
      if(!this.value){
        this.isShowpop = false
      }else{
        if(this.showpop && !this.showpop){
          this.isShowpop = false
        }else{
          this.isShowpop = true
        }
      }
    }
  },
  methods:{
    cancel(){
      this.$emit('cancel')
    },
    confirm(){
      this.$emit('confirm')
    }
  }
});
</script>

<style lang="scss" scoped>
  .hy-main{
    &-pop{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10000;
      background: rgba(0,0,0,.3);
    }
    &-content{
      width: 80%;
      height: 400rpx;
      background: #fff;
      border-radius: 16rpx;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 100001;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-header{
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        font-size: 32rpx;
        border-bottom: 1px solid #eee;
        position: relative;
        &-closed{
          background: #fff;
          border-radius: 100%;
          text-align: center;
          width: 48rpx;
          height: 48rpx;
          line-height: 48rpx;
          position: absolute;
          right: -18rpx;
          top: -20rpx;
        }
      }
      &-box{
        height: 100%;
      }
      &-footer{
        display: flex;
        align-items: center;
        height: 100rpx;
        justify-content: space-between;
        border-top: 1px solid #eee;
        &-cancel{
          line-height: 100rpx;
          font-size: 40rpx;
          flex: 1;
          text-align: center;
          border-right: 1px solid #eee;
        }
        &-confirm{
          line-height: 100rpx;
          font-size: 40rpx;
          flex: 1;
          text-align: center;
        }
      }
    }
  }
</style>