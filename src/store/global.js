import { reactive, toRefs } from "vue";

const globalStates = reactive({
  toggleUpdatePopup: false,
});

export default function useGlobal() {
  const handleToggleUpdatePopup = () => {
    globalStates.toggleUpdatePopup = !globalStates.toggleUpdatePopup;
  };

  return {
    ...toRefs(globalStates),
    handleToggleUpdatePopup,
  };
}
