import {type RouteConfig, route,} from "@react-router/dev/routes"

export default [
    route("*?", "./components/Catchall.tsx"),
] satisfies RouteConfig