import {type RouteConfig, route, layout, index, prefix} from "@react-router/dev/routes"
import "react-router"
declare module "react-router"{
    interface AppLoadContext {
    }
}

export default [
    // Cover and default route
    // keep but simplify and use as home page. 
    // Links to Portfolio, Construction, Ramblings, Contact 
    index("./components/Home.tsx", {id:"Cover"}),
    route("*?", "./components/Error.tsx", {id:"catchall"}),
    layout("./components/Navigation.tsx", [
        route("portfolio", "./components/Portfolio.tsx", {id:"portfolio"}),
        route("showroom", "./components/Web.tsx", {id:"showroom"}),
        route("weirdness", "./components/Weirdness.tsx", {id:"weirdness"}),
        route("guestbook", "./components/Contact.tsx", {id:"guestbook"}, [
            index("./components/FormContact.tsx", {id:"formContact"}),
        ]),    
        ...prefix("demo", [
            route("tiles", "./components/demo/SkillTilesDemo.tsx", {id:"tiles"}),
            route("map", "./components/demo/InteractiveKothis.tsx", {id:"kothis"})
        ]),
        route("loading", "./components/Loading.tsx", {id:"loading"}),
    ]),
] satisfies RouteConfig