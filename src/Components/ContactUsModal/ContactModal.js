import React, { useContext } from "react";
import { ToggleSideNavbarContactModal } from "../../Contexts/ToggleSideNavbarContactModalContext";

function ContactModal() {
	const { isContactModalOpen, toggleContactModal } = useContext(
		ToggleSideNavbarContactModal
	);
	return isContactModalOpen ? (
		<div className="contact-modal-container">
			<div className="contact-modal-body">
				<h3 className="no-margin">Contact Us</h3>
				<p className="no-margin">Need some help? We are here for you.</p>
				<div className="d-flex contact-info-phone-email flex-column align-items-center">
					<span> +91-6364001001</span>
					<a href="mailto:hello@moneyhop.co" target="_blank">
						hello@moneyhop.co
					</a>
				</div>
				<button className="modal-close-btn" onClick={toggleContactModal}>
					×
				</button>
				<form className="contact-form">
					<h3 className="contact-form__label-name">Name:</h3>
					<input
						type="text"
						className="contact-form__input"
						placeholder="Your name"
					/>
					<h3 className="contact-form__label-name">Email:</h3>
					<input
						type="email"
						className="contact-form__input"
						placeholder="Your email"
					/>
					<h3 className="contact-form__label-name">Phone:</h3>
					<input
						type="number"
						className="contact-form__input"
						placeholder="Your number"
					/>
					<h3 className="contact-form__label-name">Message:</h3>
					<textarea
						className="contact-form__message-textarea"
						placeholder="Your message"
					></textarea>
					<button className="contact-form__submit-btn">Submit</button>
				</form>
			</div>
		</div>
	) : null;
}
export default ContactModal;
