import {type RouteConfig, route, index,} from "@react-router/dev/routes"
import "react-router"
declare module "react-router"{
    interface AppLoadContext {
    }
}

export default [
    // Cover and default route
    index("./components/Cover.tsx", {id:"Cover"}),
    route("*?", "./components/Loading.tsx", {id:"catchall"}),
    // Creative side paths
    route("creative", "./components/Navigation.tsx", {id:"createNav"}, [
        index("./components/Home.tsx"),
        route("people", "./components/People.tsx"),
        route("projects", "./components/Projects.tsx"),
    ]),
    // Portfolio side paths
    route ("portfolio", "./components/Navigation.tsx", {id:"portNav"}, [
        index("./components/Portfolio.tsx"),
        route("web", "./components/Web.tsx"),
        route("assets", "./components/Assets.tsx"),
        route("writing", "./components/Writing.tsx"),
    ]),
    route("contact", "./components/Contact.tsx", {id:"contact"}),
] satisfies RouteConfig