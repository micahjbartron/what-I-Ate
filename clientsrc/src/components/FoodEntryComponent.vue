<template>
  <div class="entry-component row">
    <div class="col-10 m-auto">
      <form @submit.prevent="addFoodEntry">
        <input type="text" v-model="foodData.name" placeholder="...Food Name" />
        <input type="text" v-model="foodData.quantity" placeholder="...Quantity" />
        <input type="text" v-model="foodData.calories" placeholder="...Calories" />
        <button class="btn btn-danger">Submit</button>
      </form>
      <h1>food entry thingy</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "entryComponent",
  data() {
    return {
      foodData: {}
    };
  },
  computed: {},
  methods: {
    addFoodEntry() {
      console.log(JSON.stringify(this.foodData) + "foodData");

      this.$store.dispatch("addFoodEntry", this.foodData);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>