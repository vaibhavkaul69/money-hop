import "./App.css";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import ToggleSideNavbarContactModalProvider from "./Contexts/ToggleSideNavbarContactModalContext";
import ContactModal from "./Components/ContactUsModal/ContactModal";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";

function App() {
	//When user tries to close the TAB.
	window.onbeforeunload = function () {
		return true;
	};
	//When user tries to go Back and Forth by clicking on History button.
	window.onpopstate = function () {
		alert("You are trying to go Back and Forth");
	};

	return (
		<main className="main-body-content">
			<ToggleSideNavbarContactModalProvider>
				<BrowserRouter>
					<TopNavbar />
					<SideNavbar />
					<ContactModal />
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/money-hop" component={LandingPage} />
					<Route path="/home" component={LandingPage} />
					<Route path="/about" component={About} />
					<Route path="/blog" component={Blog} />
					<Footer />
				</BrowserRouter>
			</ToggleSideNavbarContactModalProvider>
		</main>
	);
}

export default App;
