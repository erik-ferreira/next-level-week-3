import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} />
    </Navigator>
  );
}

export default Routes;
