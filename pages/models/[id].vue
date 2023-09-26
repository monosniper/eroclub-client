<script setup>
    import {useMainStore} from "~/store";
    import axios from "axios";

    const route = useRoute()
    const store = useMainStore()

    store.setBg(1)

    const rs = await axios.get("http://localhost:8081/models/"+route.params.id)
    const model = rs.data.data[0]
    console.log(model)

</script>

<template>
    <div>
        <Logo />

        <div class="block main">
            <div class="block__left">
                <div class="block__img" :style="`background-image: url(http://localhost:8081/uploads/${model.thumbnail})`"></div>
            </div>
            <div class="block__right">
                <div class="block__body">
                    <div class="block__title ">{{ model.name }} <a :href="`tel:${model.phone}`" class="number">{{ model.phone }}</a></div>
                    <van-row class="prop" gutter="80">
                        <van-col span="8">
                            <van-row class="prop__row" gutter="20">
                                <van-col span="16">Возраст:</van-col>
                                <van-col span="8">{{ model.age }}</van-col>
                            </van-row>
                            <van-row gutter="20">
                                <van-col span="16">Город:</van-col>
                                <van-col span="8">{{ model.location }}</van-col>
                            </van-row>
                        </van-col>
                        <van-col span="8">
                            <van-row class="prop__row" gutter="20">
                                <van-col span="16">Рост:</van-col>
                                <van-col span="8">{{ model.height }}</van-col>
                            </van-row>
                            <van-row gutter="20">
                                <van-col span="16">Грудь:</van-col>
                                <van-col span="8">{{ model.breast }}</van-col>
                            </van-row>
                        </van-col>
                    </van-row>
                    <div class="prop-sep"></div>
                    <van-row class="prop" gutter="80">
                        <van-col span="8">
                            <van-row class="prop__row" gutter="20">
                                <van-col span="16">1 час:</van-col>
                                <van-col span="8">{{ model.hour }}</van-col>
                            </van-row>
                            <van-row gutter="20">
                                <van-col span="16">Ночь:</van-col>
                                <van-col span="8">{{ model.night }}</van-col>
                            </van-row>
                        </van-col>
                        <van-col span="8">
                            <van-row class="prop__row" gutter="20">
                                <van-col span="16">2 часа:</van-col>
                                <van-col span="8">{{ model.hour_2 }}</van-col>
                            </van-row>
                            <van-row gutter="20">
                                <van-col span="16">Выезд:</van-col>
                                <van-col span="8">{{ model.is_out }}</van-col>
                            </van-row>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>

        <van-row gutter="20">
            <van-col span="10">
                <div class="block">
                    <div class="block__body">
                        <div class="block__title">{{ model.description }}</div>
                        <div class="block__footer">
                            <p>Время для звонков:</p>
                            <div class="pink">{{ model.time }}</div>
                        </div>
                    </div>
                </div>
            </van-col>
            <van-col span="14">
                <div class="block">
                    <div class="block__body">
                        <div class="block__title">Интим услуги:</div>
                        <p>{{ model.services }}</p>
<!--                        <div class="block__row">Классический секс</div>-->
<!--                        <div class="block__row">Оральный секс</div>-->
<!--                        <div class="block__row">Принимаю кунилингус</div>-->
<!--                        <div class="block__row">Эротический массаж</div>-->
<!--                        <div class="block__row">Эскорт</div>-->
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<style scoped lang="scss">
    .wrapper__bg {
        background-image: url(/img/1.webp) !important;
    }

    .block {
        z-index: 100;
        font-family: Comfortaa;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        margin-bottom: 1rem;
        display: flex;

        &__img {
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100%;
            border-radius: 35px;
        }

        &.main {
            .block__title {
                font-size: 24px;
                margin-bottom: 2rem;
            }

            .block__body {
                padding: 45px 30px;
            }
        }

        &__left {
            width: 320px;
            height: 310px;
        }

        &__right {
            width: calc(100% - 320px);
        }

        &__body {
            padding: 30px;
        }

        &__title {
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 1.89px;
            margin-bottom: 1rem;
        }

        &__row {
            font-size: 14px;
            letter-spacing: 1.47px;
            margin-bottom: .5rem;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .prop {
        font-size: 14px;

        &-sep {
            margin-bottom: 3rem;
        }

        &__row {
            margin-bottom: 1.5rem;
        }
    }

    .pink {
        color: #EF08D8;
        font-size: 14px;
        letter-spacing: 1.47px;
    }

    .number {
        color: #EF08D8;
        font-size: 18px;
        letter-spacing: 1.89px;
    }
</style>