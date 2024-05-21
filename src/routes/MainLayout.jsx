import {
  IxBasicNavigation,
  IxMenu,
  IxMenuItem,
  IxMenuSettings,
  IxMenuSettingsItem,
  IxMenuAbout,
  IxMenuAboutItem,
} from "@siemens/ix-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <IxBasicNavigation applicationName="Ix Issue 1288">
      <IxMenu enableToggleTheme={true} expand={true}>
        <IxMenuItem
          tab-icon="function-block"
          onClick={() => navigate("home")}
          {...(location.pathname.split("/")[1] == "home" && { active: true })}
        >
          Home
        </IxMenuItem>

        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>

        <IxMenuAbout>
          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
        </IxMenuAbout>
      </IxMenu>

      <div className="container-fluid mx-3">
        <Outlet />
      </div>
    </IxBasicNavigation>
  );
}
