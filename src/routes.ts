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
    index("./components/Cover.tsx", {id:"Cover"}),
    route("*?", "./components/Error.tsx", {id:"catchall"}),
    route ("portfolio", "./components/Navigation.tsx", {id:"portNav"}, [
        index("./components/Portfolio.tsx"),
        route("web", "./components/Web.tsx"),
        route("assets", "./components/Assets.tsx"),
        route("writing", "./components/Writing.tsx"),
    ]),
    route("construction", "./components/Navigation.tsx", {id:"construction"}, [
        index("./components/Construction.tsx"),
    ]),
    route("ramblings", "./components/Navigation.tsx", {id:"ramblings"}, [
        index("./components/Ramblings.tsx"),
    ]),
    route("contact", "./components/Navigation.tsx", {id:"contact"}, [
        layout("./components/Contact.tsx",[
            index("./components/FormContact.tsx", {id:"formContact"}),
        ])
    ]),    
    ...prefix("demo", [
        route("tiles", "./components/demo/SkillTilesDemo.tsx"),
        route("map", "./components/demo/InteractiveKothis.tsx")
    ]),
] satisfies RouteConfig