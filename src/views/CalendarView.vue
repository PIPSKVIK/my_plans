<template>
    <div class="calendar-page">
        <h2>calendar</h2>

        <AppField v-model="userId" name="userId" placeholder="user id" />
        <AppButton
            primary
            size="medium"
            @click="testApis"
            class="calendar-page__test-btn"
        >
            Test
        </AppButton>

        <ul>
            <li v-if="!userInfo.name || !userInfo.nick">{{ userInfo }}</li>
            <li>Name: {{ userInfo.name }}</li>
            <li>Nick: {{ userInfo.nick }}</li>
            <li>Balance: {{ userInfo.balance }}</li>
        </ul>

        <div>
            <AppButton primary size="medium" @click="getAllBalance">
                Get All balance
            </AppButton>
            <span>{{ allBalance.total }}</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { apiClient } from '@/api/index';
import { AppButton, AppField } from '@/components/Atoms';

const message = ref('');
const userId = ref('');
const userInfo = ref({});
const allBalance = ref('0.0');

onMounted(async () => {
    try {
        const { data } = await apiClient({
            url: 'hello/',
            method: 'get'
        });
        message.value = data.message;
    } catch (error) {
        console.log(error);
    }
});

const testApis = async () => {
    if (!userId.value) return;
    try {
        const { data } = await apiClient({
            url: `get_info_by_user/${userId.value}/`,
            method: 'get'
        });
        userInfo.value = data;
        userId.value = '';
    } catch (error) {
        userInfo.value = 'Empty user ID';
    }
};

const getAllBalance = async () => {
    const { data } = await apiClient({
        url: 'get_total_balance/',
        method: 'get'
    });
    allBalance.value = data;
};
</script>

<style lang="scss" scoped>
.calendar-page {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__test-btn {
        margin-top: 25px;
    }
}
</style>
