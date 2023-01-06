import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {useState} from 'react'
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
// import Skills from '@/pages/notifications'
import { Skills } from "@/pages/dashboard";
import { useCookies } from "react-cookie";
export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  // enable overlay
  const [open, setOpen] = useState(false);
  // prevent from scrolling the body
  document.body.style.overflow = open ? "hidden" : "auto";
  const toggleOverlay = (b) => setOpen(b); 
  const [cookie,setCookie]=useCookies()
  
  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      { open &&<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10">
  </div>}
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
      
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) =>{
                if(path==='/skills') return <Route exact path={path} element={<Skills open={open} toggleOverlay={toggleOverlay} />} />
                 return <Route exact path={path} element={element} />

               
              })
          )}
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
// export { to};
