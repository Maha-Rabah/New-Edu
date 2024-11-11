import JobDescription from "../components/Jobs/Job/JobDescription";
import { ROUTES } from "../constans/const";
import Joinus from "../pages/Joinus";
export const JoinusRoute = [
    {
      path: ROUTES.JOINUS,
      element: <Joinus/>,
    },
    {
      path: ROUTES.JOBDESCRIPTION,
      element: <JobDescription />,
    }
  ];