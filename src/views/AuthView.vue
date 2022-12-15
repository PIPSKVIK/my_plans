<template>
    <div class="auth-view">
        <div class="auth-view__container">
            <h3>Enter to Zep XL corporate platform</h3>
            <AppField
                v-model="v$.email.$model"
                name="Email"
                placeholder="Enter your e-mail"
                class="auth-view__email"
                :error="v$.email.$errors.length"
            >
                <template #error>
                    <div v-for="error of v$.email.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </template>
            </AppField>
            <AppField
                v-model="v$.password.$model"
                name="Password"
                showEyeIcon
                placeholder="Enter password"
                class="auth-view__password"
                type="password"
                :error="v$.email.$errors.length"
            >
                <template #error>
                    <div v-for="error of v$.password.$errors" :key="error.$uid">
                        {{ error.$message }}
                    </div>
                </template>
            </AppField>
            <div class="auth-view__controls">
                <AppButton
                    primary
                    size="block"
                    class="auth-view__controls-btn-login"
                    @click="loginHandler"
                >
                    Login
                </AppButton>
                <AppButton secondary size="block" @click="forgotHandler">
                    Forgot Password
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppField, AppButton } from '@/components/Atoms';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const authData = ref({
    email: '',
    password: ''
});

const rules = {
    email: { required, email },
    password: { required }
};
const v$ = useVuelidate(rules, authData.value);

const loginHandler = () => {
    v$.value.$validate();
    if (v$.value.$invalid) return;
    console.log(authData);
};
const forgotHandler = () => {
    console.log('forgot password');
};
</script>

<style lang="scss" scoped>
.auth-view {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 66.5px);
    &__container {
        min-width: 454px;
        padding: 10px;
    }
    &__email {
        margin-bottom: 19px;
    }
    &__password {
        margin-bottom: 36px;
    }
    &__controls {
        display: flex;
    }
    &__controls-btn-login {
        margin-right: 24px;
    }
}
</style>
