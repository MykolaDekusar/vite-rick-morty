import { reactive } from "vue";

export const store = reactive({
  status: null,
  name: null,
  show: false,
  page: 1,
  count: null,
  error: false,
});
