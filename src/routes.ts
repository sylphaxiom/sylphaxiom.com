import {type RouteConfig, route,} from "@react-router/dev/routes"

export default [
    route("*?", "./components/Cover.tsx"),
] satisfies RouteConfig