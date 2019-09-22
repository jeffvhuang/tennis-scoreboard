import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../components/scoring/home/HomeScreen";
import SavedMatchesScreen from "../components/scoring/saved/SavedMatchesScreen";
import ScoringScreen from "../components/scoring/scoreboard/ScoringScreen";
import TournamentsScreen from "../components/explore/TournamentsScreen";
import MatchesScreen from "../components/explore/MatchesScreen";
import LoginScreen from "../components/login/LoginScreen";

const ScoringStack = createStackNavigator(
  {
    Home: HomeScreen,
    SavedMatches: SavedMatchesScreen,
    Scoreboard: ScoringScreen
  },
  {
    initialRouteName: "Scoreboard",
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

const ExploreStack = createStackNavigator(
  {
    Tournaments: TournamentsScreen,
    Matches: MatchesScreen
  },
  {
    initialRouteName: "Tournaments",
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

const MainTabs = createBottomTabNavigator(
  {
    Scoring: ScoringStack,
    Explore: ExploreStack
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "royalblue",
      style: {
        backgroundColor: "white",
        height: 40
      },
      tabStyle: {
        justifyContent: "center"
      },
      labelStyle: {
        fontSize: 18,
        height: "100%",
        textAlignVertical: "center"
      }
    }
  }
);

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
