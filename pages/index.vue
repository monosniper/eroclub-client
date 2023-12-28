<script setup>
    import Logo from "~/components/Logo.vue";
    import {useMainStore} from "~/store";
    import axios from "axios";
    import LocationFilter from "~/components/LocationFilter.vue";

    const store = useMainStore()

    store.setBg(2)

    const rs = await axios.get("https://server.eroclub.site/models/")
    const models = rs.data.data
    const locations = new Set(models.map(({location}) => location))
    store.setLocation(locations[0])
</script>

<template>
    <div>
        <Logo />
      <LocationFilter :locations="locations" />
        <div class="models">
            <NuxtLink v-for="model in models" :to="'/models/'+model.modelId">
                <div class="model" v-if="model.location === store.location">
                    <div class="model__bg" :style="`background-image: url(https://server.eroclub.site/uploads/${model.thumbnail})`"></div>
                    <div class="model__overflow">
                        <div class="model__name">{{ model.name }}</div>
                        <div class="model__number">{{ model.phone }}</div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .models {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        padding-bottom: 100px;
        justify-content: center;

        &__row {
            margin-bottom: 2rem;
        }
    }

    .model {
        width: 280px;
        height: 350px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        border-radius: 30px;

        &:hover {
            .model__bg {
                transform: scale(1.1);
            }
            .model__overflow {
                transform: translateY(0);
            }
        }

        &__name {
            color: white;
            font-family: Comfortaa, sans-serif;
            font-size: 24px;
            letter-spacing: 2.52px;
        }

        &__number {
            color: #EF08D8;
            font-family: Comfortaa, sans-serif;
            font-size: 18px;
            letter-spacing: 1.89px;
        }

        &__overflow {
            flex-direction: column;
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateY(180px);
            transition: .3s ease-in;
            background: #000;
            box-shadow: 0px -8px 65px 72px #000;
            height: 100px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }

        &__bg {
            transition: .3s ease-out;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-size: cover;
            background-position: center;
        }
    }
</style>