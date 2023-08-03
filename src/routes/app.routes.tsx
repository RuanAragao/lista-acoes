import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Lock } from '../screens/Lock';
import { List } from '../screens/List';
import { Add } from '../screens/Add';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Lock"
        component={Lock}
      />

      <Screen
        name="List"
        component={List}
      />

      <Screen
        name="Add"
        component={Add}
      />
    </Navigator>
  );
}