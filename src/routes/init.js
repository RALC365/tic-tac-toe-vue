import Vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter);

const routes = [
    {path: '/', component: Menu, name: "home"},
    //{path: '/s-player', component: GameRoom, name: "s-play"},
];

export const router = new VueRouter({ routes });