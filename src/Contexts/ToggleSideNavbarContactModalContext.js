import React, { Component, createContext } from "react";

export const ToggleSideNavbarContactModal = createContext();

class ToggleSideNavbarContactModalProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSideBarOpen: false,
			isContactModalOpen: false,
		};
	}
	toggleSideNavbar = () => {
		this.setState({
			isSideBarOpen: !this.state.isSideBarOpen,
		});
	};
	toggleContactModal = () => {
		this.setState({
			isContactModalOpen: !this.state.isContactModalOpen,
		});
	};
	render() {
		console.log(this.props);
		return (
			<ToggleSideNavbarContactModal.Provider
				value={{
					...this.state,
					toggleSideNavbar: this.toggleSideNavbar,
					toggleContactModal: this.toggleContactModal,
				}}
			>
				{this.props.children}
			</ToggleSideNavbarContactModal.Provider>
		);
	}
}

export default ToggleSideNavbarContactModalProvider;
