import { Outlet } from "react-router-dom";
import Menu from "../components /Menu";
import Contacts from "../components /Contacts";

export default function MainLayout (){
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Menu />
        <Outlet />
        <Contacts />
      </div>
    );
}