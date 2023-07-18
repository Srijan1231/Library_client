import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { ProfileLayout } from "./ProfileLayout";

const Profile = () => {
  return (
    <UserLayout title="Profile">
      <ProfileLayout />
    </UserLayout>
  );
};

export default Profile;
