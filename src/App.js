import "./App.css";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import ToggleSideNavbarContactModalProvider from "./Contexts/ToggleSideNavbarContactModalContext";
import ContactModal from "./Components/ContactUsModal/ContactModal";

function App() {
	return (
		<main className="main-body-content">
			<ToggleSideNavbarContactModalProvider>
				<BrowserRouter>
					<TopNavbar />
					<SideNavbar />
					<ContactModal />
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={LandingPage} />
					<Route path="/about" component={About} />
				</BrowserRouter>
			</ToggleSideNavbarContactModalProvider>
		</main>
	);
}

export default App;
