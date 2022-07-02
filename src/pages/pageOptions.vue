<template>
  <div class="content-wrapper-options">
    <menu-component type="horizontal" />

    <div class="options__content">
      <div class="options__user-card">
        <player-item
          :name="getMainUserOptions.name"
          :point-color="getMainUserOptions.color"
          :total="null"
        />
      </div>
      <div class="options__user-edit">
        <div class="options__user-edit-name">
          <h3>Name:</h3>
          <input
            type="text"
            v-model="getMainUserOptions.name"
            @input="updateName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuComponent from "@/components/menuComponent";
import playerItem from "@/components/game/menu/playerItem";

import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    "menu-component": menuComponent,
    "player-item": playerItem,
  },
  name: "pageOptions",
  methods: {
    updateName(e) {
      console.log(e.target.value);
      this.changeUserName(e.target.value);
    },

    ...mapMutations("playersState", ["changeUserName"]),
  },
  computed: {
    ...mapGetters("playersState", ["getMainUserOptions"]),
  },
};
</script>

<style scoped></style>
