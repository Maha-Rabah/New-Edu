import App from "../App"
import { AboutRoute } from "../modules/about/router/AboutRoute"
import { ContuctRoute } from "../modules/contuct/router/contuctRoute"
import { JoinusRoute } from "../modules/joinus/router/JoinusRoute"
import Main from "../modules/main/pages/Main"
import { OurworkRoute } from "../modules/ourwork/router/OurWork"
import {DashboardRoute} from '../modules/dashboard/Home/router/DashboardRoute'
import { DashboardOppRoute } from "../modules/dashboard/Opp/router/DashboardOppRoute"
import { DashboardTeamRoute } from "../modules/dashboard/Team/router/DashboardTeamRoute"
import {DashboardEpiRoute} from '../modules/dashboard/Episodes/router/DashboardEpiRoute'
import { DashboardStatsRoute } from "../modules/dashboard/Stats/router/DashboardStatsRoute"
import { DashboardBlogRoute } from "../modules/dashboard/Blog/router/DashboardBlogRoute"
import { JobDescriptionRoute } from '../modules/dashboard/Opp/components/JobDescription/router/JobDescriptionRoute'


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
    ...DashboardRoute,
    ...DashboardOppRoute,
    ...DashboardTeamRoute,
    ...DashboardEpiRoute,
    ...DashboardStatsRoute,
    ...DashboardBlogRoute,
    ...JobDescriptionRoute,
    ]
    }
]