<template>
  <div>
    <h1>主页</h1>
    <a-button @click="onClick">提示</a-button>
    <a-button @click="onNotify">通知</a-button>
    <a-button @click="showModal(true)" type="primary">弹框</a-button>
    <a-modal :visible="visible" title="弹框标题" @cancel="showModal(false)"></a-modal>
  </div>
</template>

<script>
import { message, notification } from 'ant-design-vue';
import { reactive, toRefs } from 'vue';
import { getList, userList } from '@/service/user';
export default {
  setup() {
    const data = reactive({
      visible: false,
    });

    function showModal(show) {
      data.visible = show;
    }

    return {
      showModal,
      ...toRefs(data),
    };
  },

  async mounted() {
    await userList();
  },

  methods: {
    onClick() {
      message.error('This is a normal message');
    },
    onNotify() {
      notification.success({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
  },
};
</script>
