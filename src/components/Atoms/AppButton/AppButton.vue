<template>
    <button :class="['app-button', { primary, secondary }, size]">
        <span><slot /></span>
        <svg v-if="loading">
            <use xlink:href="/sprite.svg#loader"></use>
        </svg>
    </button>
</template>

<script setup>
import './index.scss';

defineProps({
    loading: {
        type: Boolean
    },
    primary: {
        type: Boolean
    },
    secondary: {
        type: Boolean
    },
    size: {
        type: String,
        default: '',
        validator: function (value) {
            return (
                ['', 'medium', 'large', 'block', 'small'].indexOf(value) !== -1
            );
        }
    }
});
</script>

<style lang="scss" scoped></style>
