import App from "../App"
import { AboutRoute } from "../modules/about/router/AboutRoute"
import { ContuctRoute } from "../modules/contuct/router/contuctRoute"
import { JoinusRoute } from "../modules/joinus/router/JoinusRoute"
import Main from "../modules/main/pages/Main"
import { OurworkRoute } from "../modules/ourwork/router/OurWork"
export const routes = [
    {
    path : "/",
    element : <App/>,
    children : [
    {
    path : "",
    element : <Main/>,
    },
    ...JoinusRoute,
    ...ContuctRoute,
    ...AboutRoute,
    ...OurworkRoute,
    ]
    }
]