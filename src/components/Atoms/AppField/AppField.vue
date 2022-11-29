<template>
    <div class="app-field">
        <label :for="name">
            {{ name }}
        </label>
        <component
            :is="multiline ? 'textarea' : 'input'"
            :id="name"
            :value="modelValue"
            :placeholder="placeholder"
            class="app-field__input"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <div class="app-field__error">error</div>
    </div>
</template>

<script setup>
import './index.scss';

defineEmits(['update:modelValue']);
defineProps({
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
    }
});
</script>
