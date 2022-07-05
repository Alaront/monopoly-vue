<template>
  <div class="alert-user-win">
    <div class="alert-user-win__wrapper">
      <p class="alert-user-win__text">Игрок {{ name }} одержал победу</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style lang="sass" src="@/assets/alerts/alertUserWin.sass"></style>
