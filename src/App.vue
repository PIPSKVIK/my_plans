<template>
    <div id="app">
        <AppHeader />
        <RouterView />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { AppHeader } from './components/Organisms';
</script>

<style>
#app {
    height: 100%;
}
</style>
