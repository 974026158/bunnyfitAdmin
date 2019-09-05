import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/login",
            name: "login",
            component: resolve => require(["../views/Login/index.vue"], resolve)
        },
        {
            path: "/tabbar",
            name: "tabbar",
            component: resolve => require(["../common/Tabbar/index.vue"], resolve),
            meta: {
                requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            },
            children: [{
                    path: "/instrument",
                    name: "instrument",
                    meta: { title: "仪表盘" },
                    component: resolve =>
                        require(["../components/instrument/index.vue"], resolve)
                },
                {
                    path: "/introduction",
                    name: "introduction",
                    meta: { title: "场馆简介" },
                    component: resolve =>
                        require(["../components/introduction/index.vue"], resolve)
                },
                {
                    path: "/introduction/stadiumEditor",
                    name: "stadiumEditor",
                    meta: { title: "场馆编辑" },
                    component: resolve =>
                        require(["../components/stadiumEditor/index.vue"], resolve)
                },
                {
                    path: "/cardManagement",
                    name: "cardManagement",
                    meta: { title: "会卡管理" },
                    component: resolve =>
                        require(["../components/cardManagement/index.vue"], resolve)
                },
                {
                    path: "/cardManagement/stuckList",
                    name: "stuckList",
                    meta: { title: "会卡列表" },
                    component: resolve =>
                        require(["../components/stuckList/index.vue"], resolve)
                },
                {
                    path: "/cardManagement/stuckList/showVip",
                    name: "showVip",
                    meta: { title: "查看会员" },
                    component: resolve =>
                        require(["../components/showVip/index.vue"], resolve)
                },
                {
                    path: "/coachAdmin",
                    name: "coachAdmin",
                    meta: { title: "教练管理" },
                    component: resolve =>
                        require(["../components/coachAdmin/index.vue"], resolve)
                },
                {
                    path: "/coachAdmin/theNewCoach",
                    name: "theNewCoach",
                    meta: { title: "新建教练" },
                    component: resolve =>
                        require(["../components/theNewCoach/index.vue"], resolve)
                },
                {
                    path: "/coachAdmin/lookOverCoach",
                    name: "lookOverCoach",
                    meta: { title: "查看教练" },
                    component: resolve =>
                        require(["../components/lookOverCoach/index.vue"], resolve)
                },
                {
                    path: "/guestRegistration",
                    name: "guestRegistration",
                    meta: { title: "来客登记" },
                    component: resolve =>
                        require(["../components/guestRegistration/index.vue"], resolve)
                },
                {
                    path: "/experienceTheBracelet",
                    name: "experienceTheBracelet",
                    meta: { title: "体验手环" },
                    component: resolve =>
                        require(["../components/experienceTheBracelet/index.vue"], resolve)
                },
                {
                    path: "/manualOpening",
                    name: "manualOpening",
                    meta: { title: "手动开门" },
                    component: resolve =>
                        require(["../components/manualOpening/index.vue"], resolve)
                },
                {
                    path: "/activeSituation",
                    name: "activeSituation",
                    meta: { title: "活跃情况" },
                    component: resolve =>
                        require(["../components/activeSituation/index.vue"], resolve)
                },
                {
                    path: "/activeSituation/showActiveSituation",
                    name: "showActiveSituation",
                    meta: { title: "活跃情况" },
                    component: resolve =>
                        require(["../components/showActiveSituation/index.vue"], resolve)
                },
                {
                    path: "/ccessRecords",
                    name: "ccessRecords",
                    meta: { title: "出入记录" },
                    component: resolve =>
                        require(["../components/ccessRecords/index.vue"], resolve)
                },
                {
                    path: "/ccessRecords/ccessRecordsVersionTwo",
                    name: "ccessRecordsVersionTwo",
                    meta: { title: "出入记录" },
                    component: resolve =>
                        require(["../components/ccessRecordsVersionTwo/index.vue"], resolve)
                }
            ],
            redirect: "/instrument"
        },
        {
            path: "/",
            redirect: "/login"
        }
    ]
});
//注册全局钩子 拦截
router.beforeEach((to, from, next) => {
    const token = store.state.token;
    if (to.meta.requireAuth) {
        //判断路由是否需要登录权限
        if (token) {
            //通过vuex state 获取当前的token是否存在
            next();
        } else {
            // console.log("该页面需要登录");
            next({
                path: "/login" //将路由的path作为参数  登录成功后跳转该路由
            });
        }
    } else {
        next();
    }
});
export default router;
// 在页面中进行数据请求