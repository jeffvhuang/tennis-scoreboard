import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../components/explore/HomeScreen";
import TournamentsScreen from "../components/explore/TournamentsScreen";
import MatchesScreen from "../components/explore/MatchesScreen";
import LoginScreen from "../components/login/LoginScreen";
import ScoringScreen from "../components/scoring/ScoringScreen";

const ExploreStack = createStackNavigator(
  {
    Home: HomeScreen,
    Tournaments: TournamentsScreen,
    Matches: MatchesScreen
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "navy"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

// const ErrorStack = createStackNavigator({ ErrorView: ErrorScreen });

const MainTabs = createBottomTabNavigator({
  Explore: ExploreStack,
  Scoring: ScoringScreen
});

const AppNavigator = createSwitchNavigator(
  {
    Main: MainTabs,
    Login: LoginScreen
  },
  {
    initialRouteName: "Main"
  }
);

export default AppNavigator;
