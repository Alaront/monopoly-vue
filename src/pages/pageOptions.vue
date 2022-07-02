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
        <div class="options__user-edit-color">
          <h3>Color:</h3>
          <color-picker
            format="hex"
            @pureColorChange="updateColor"
            v-model:pureColor="getMainUserOptions.color"
            v-model:gradientColor="gradientColor"
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

import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

export default {
  components: {
    "menu-component": menuComponent,
    "player-item": playerItem,
    "color-picker": ColorPicker,
  },
  name: "pageOptions",
  data() {
    return {
      pureColor: "red",
      gradientColor:
        "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
    };
  },
  methods: {
    updateName(e) {
      this.changeUserName(e.target.value);
    },

    updateColor(e) {
      this.changeUserColor(e);
    },

    ...mapMutations("playersState", ["changeUserName", "changeUserColor"]),
  },
  computed: {
    ...mapGetters("playersState", ["getMainUserOptions"]),
  },
};
</script>

<style scoped></style>
