<script setup>
    const routes = [
        {
            to: '/',
            icon: 'person',
            name: 'Профиль'
        },
        {
            to: '/models',
            icon: 'woman',
            name: 'Все модели'
        },
        {
            to: '/top',
            icon: 'star',
            name: 'Топ модели'
        },
        {
            to: '/flirt',
            icon: 'chatbubbles',
            name: 'Флирт-чат'
        },
        {
            to: '/lucky',
            icon: 'happy',
            name: 'Мне повезет!'
        },
    ]
</script>

<template>
    <div class="nav">
        <div class="nav__center">
            <img src="/img/logo.svg" alt="Logo">
            <div class="menu">
                <nuxt-link exactActiveClass="active" v-for="route in routes" :to="route.to" class="menu__item">
                    <nuxt-icon :name="route.icon" />
                    {{ route.name }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .nav {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .nav__center {
        text-align: center;
    }
    .menu {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
        max-width: 100%;
    }
    .menu__item {
        display: flex;
        padding-left: 20px;
        align-items: center;
        font-size: 18px;
        gap: 10px;
        height: 50px;
        background: linear-gradient(225deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.03) 100%);
        backdrop-filter: blur(10px);
    }
</style>