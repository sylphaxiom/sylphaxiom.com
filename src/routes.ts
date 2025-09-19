import {type RouteConfig, route, index,} from "@react-router/dev/routes"
import "react-router"
declare module "react-router"{
    interface AppLoadContext {
    }
}

export default [
    // Cover and default route
    index("./components/Cover.tsx", {id:"Cover"}),
    route("*?", "./components/Cover.tsx", {id:"Cover_Def"}),
    // Creative side paths
    route("creative", "./components/Navigation.tsx", {id:"createNav"}, [
        index("./components/Home.tsx", {id:"home"}),
        route("about", "./components/People.tsx", {id:"people"}),
        route("projects", "./components/Projects.tsx", {id:"proj"}),
        route("contact", "./components/Contact.tsx", {id:"createCont"}),
    ]),
    // Portfolio side paths
    route ("portfolio", "./components/Navigation.tsx", {id:"portNav"}, [
        index("./components/Portfolio.tsx", {id:"port"}),
        route("web", "./components/Web.tsx", {id:"web"}),
        route("assets", "./components/Assets.tsx", {id:"assets"}),
        route("contact", "./components/Contact.tsx", {id:"portCont"}),
    ]),
] satisfies RouteConfig