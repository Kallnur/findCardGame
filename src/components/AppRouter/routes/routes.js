import Home from "../../../pages/Home/Home";
import NotFound from "../../../pages/NotFound/NotFound";
import SignIn from "../../../pages/SignIn/SignIn";
import SignUp from "../../../pages/SignUp/SignUp";
import { HOME, NOT_FOUND, SIGNIN, SIGNUP } from "../../../utils/routePath/routePath";

export const pubRoute = [
    {
        path: SIGNIN,
        component: <SignIn />
    },
    {
        path: SIGNUP,
        component: <SignUp />
    },
    {
        path: HOME,
        component: <SignIn />
    },
    {
        path: NOT_FOUND,
        component: <NotFound />
    }
]

export const priRoute = [
    {
        path: HOME,
        component: <Home />
    },
    {
        path: NOT_FOUND,
        component: <NotFound />
    }
]