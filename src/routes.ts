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
    layout("./components/Navigation.tsx", [
        route("portfolio", "./components/Portfolio.tsx", {id:"portfolio"}),
        route("showroom", "./components/Showroom.tsx", {id:"showroom"}),
        route("weirdness", "./components/Weirdness.tsx", {id:"weirdness"}),
        route("guestbook", "./components/Contact.tsx", {id:"guestbook"}, [
            layout("./components/Contact.tsx",[
                index("./components/FormContact.tsx", {id:"formContact"}),
            ])
        ]),
    ]),
] satisfies RouteConfig