import { Navigation } from 'react-native-navigation';
import AddProduct from './src/scene/AddProduct'
import WelcomeScene from './src/scene/WelcomeScene'
import configureStore from './src/store/store'
import LandingPage from './src/scene/LandingPage'
import Starter from './src/scene/Starter'
import AboutUs from './src/scene/AboutUs'
import Contact from './src/scene/Contact'
import GalleryScene from './src/scene/GalleryScene'
import Blog from './src/scene/Blog'
const store = configureStore({});
// Register screens

Navigation.registerComponent("BuildBuiz.AddProduct", () => AddProduct);
Navigation.registerComponent("BuildBuiz.WelcomeScene", () => WelcomeScene);
Navigation.registerComponent("BuildBuiz.LandingPage", () => LandingPage);
Navigation.registerComponent("BuildBuiz.Starter", () => Starter);
Navigation.registerComponent("BuildBuiz.AboutUs", () => AboutUs);
Navigation.registerComponent("BuildBuiz.Contact", () => Contact);
Navigation.registerComponent("BuildBuiz.Gallery", () => GalleryScene);
Navigation.registerComponent("BuildBuiz.Blog", () => Blog);


// start a app
Navigation.startSingleScreenApp({
    screen: {
        screen: "BuildBuiz.Starter",
        title: "Login",
    }
});
