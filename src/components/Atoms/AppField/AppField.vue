<template>
    <div class="app-field">
        <label :for="name"> {{ name }}</label>
        <component
            :is="multiline ? 'textarea' : 'input'"
            :id="name"
            :value="modelValue"
            :placeholder="placeholder"
            class="app-field__input"
            :class="{ 'app-field__input--error': !!error }"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="fieldTypeStyle"
        />
        <div class="app-field__error" v-if="error">
            <slot name="error" />
        </div>
        <div
            v-if="showEyeIcon"
            class="app-field__password-eye"
            @click="showPassword = !showPassword"
        >
            <svg class="app-field__open-eye" v-if="showPassword">
                <use xlink:href="/sprite.svg#eye-open"></use>
            </svg>
            <svg class="app-field__close-eye" v-else>
                <use xlink:href="/sprite.svg#eye"></use>
            </svg>
        </div>
    </div>
</template>

<script setup>
import './index.scss';
import { ref, computed } from 'vue';

defineEmits(['update:modelValue']);
const props = defineProps({
    name: {
        type: String,
        default: 'input name'
    },
    multiline: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: 'placeholder'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    showEyeIcon: {
        type: Boolean,
        default: false
    },
    error: {
        type: [Boolean, String, Number],
        default: false
    }
});

const showPassword = ref(false);
const fieldTypeStyle = computed(() => {
    return props.type === 'password' && showPassword.value
        ? 'text'
        : 'password'
        ? props.type
        : 'text';
});
</script>
