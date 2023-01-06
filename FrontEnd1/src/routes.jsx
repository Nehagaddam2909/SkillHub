import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  PlusCircleIcon,
  UserMinusIcon,
  
} from "@heroicons/react/24/solid";
// <<<<<<< HEAD
// import { Home, Profile, Tables, Notifications ,EmployeeList} from "@/pages/dashboard";
// =======
import { Home, Profile, Tables, Skills } from "@/pages/dashboard";
// >>>>>>> a9e82dad7fe41b4e519fd12820f2b88a7a356b5b
import { SignIn, SignUp } from "@/pages/auth";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <PlusCircleIcon {...icon} />,
        name: "Add Skills",
        path: "/skills",
        element: <Skills />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "setFilter",
        path: "/setFilter",
        element: <EmployeeList />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <UserMinusIcon {...icon} />,
        name: "Logout",
        path: "/Logout",
        element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
