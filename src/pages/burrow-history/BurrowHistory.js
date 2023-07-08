import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";

import { BurrowTable } from "./BurrowTable.js";

const BurrowHistory = () => {
  return (
    <UserLayout title="BurrowHistory">
      <BurrowTable />
    </UserLayout>
  );
};

export default BurrowHistory;
