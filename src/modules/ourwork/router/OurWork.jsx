import { ROUTES } from "../constans/const";
import EduCounseling from "../components/EduCounseling/EduCounseling";
import EduLens from "../components/EduLens/EduLens";
import EduMentoring from "../components/EduMentoring/EduMentoring";

export const OurworkRoute = [
    {
      path: ROUTES.EduCounseling,
      element: <EduCounseling/>,
    },
    {
      path: ROUTES.EduLens,
      element: <EduLens/>,
    },
    {
      path: ROUTES.EduMentoring,
      element: <EduMentoring/>,
    }
  ];