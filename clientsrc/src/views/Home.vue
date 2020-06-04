<template>
  <div class="home">
    <foodEntryComponent />
    <historyComponent />
  </div>
</template>

<script>
import historyComponent from "../components/HistoryComponent.vue";
import foodEntryComponent from "../components/FoodEntryComponent.vue";
export default {
  name: "home",

  components: {
    historyComponent,
    foodEntryComponent
  }
};
</script>
