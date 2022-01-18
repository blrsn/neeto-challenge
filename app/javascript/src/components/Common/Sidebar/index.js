import React, { useState } from "react";

import { Toastr } from "neetoui/v2";
import { Sidebar } from "neetoui/v2/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { APP_NAME, SIDENAV_LINKS } from "./constants";

const Sidenav = () => {
  const history = useHistory();
  const authDispatch = useAuthDispatch();
  const userProfileImageUrl =
    "https://randomuser.me/api/portraits/thumb/women/10.jpg";

  const { user } = useUserState();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  const dropdownProps = [
    {
      label: "My Profile",
      onClick: () => history.push("/my/profile"),
    },
    {
      label: "Change Password",
      onClick: () => history.push("/my/password/edit"),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <Sidebar
      isCollapsed={isSidebarCollapsed}
      navLinks={SIDENAV_LINKS}
      appName={APP_NAME}
      organizationInfo={{
        name: "Wheel",
        subdomain: "bigbinary.com",
      }}
      profileInfo={{
        name: `${user.first_name} ${user.last_name}`,
        imageUrl: userProfileImageUrl,
        email: user.email,
        dropdownProps,
      }}
      onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      changelogProps={{ id: "neetochangelog-trigger" }}
    />
  );
};

export default Sidenav;
