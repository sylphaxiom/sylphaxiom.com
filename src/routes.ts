import {type RouteConfig, route, layout, index, prefix,} from "@react-router/dev/routes"
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
    route ("portfolio", "./components/Navigation.tsx", {id:"portNav"}, [
        index("./components/Portfolio.tsx"),
        route("web", "./components/Web.tsx"),
        route("assets", "./components/Assets.tsx"),
        route("writing", "./components/Writing.tsx"),
    ]),
    route("showroom", "./components/Navigation.tsx", {id:"showroom"}, [
        index("./components/Showroom.tsx"),
    ]),
    route("weirdness", "./components/Navigation.tsx", {id:"weirdness"}, [
        index("./components/Weirdness.tsx"),
    ]),
    route("guestbook", "./components/Navigation.tsx", {id:"guestbook"}, [
        layout("./components/Contact.tsx",[
            index("./components/FormContact.tsx", {id:"formContact"}),
        ])
    ]),    
    ...prefix("demo", [
        route("tiles", "./components/demo/SkillTilesDemo.tsx"),
        route("map", "./components/demo/InteractiveKothis.tsx")
    ]),
] satisfies RouteConfig