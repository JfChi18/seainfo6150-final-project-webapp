import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
	const [ submittedForm, setSubmittedForm ] = useState();

	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		setSubmittedForm(data);
	}

	return (
		<div className={styles.container}>
		
			{submittedForm ? (
				<div >
					<h2>
          Thank you for submitting your application! We will reach out you soon.
					</h2>
				</div>
			) : (
				<form onSubmit={onSubmit} className={styles.content}>
          <h1> <span>Join Us</span></h1>

					<div className="inputcontainer">
						<p>Looking to learn more about the equality? Join for free below..</p>

						<label htmlFor="firstname">
							<b>* First Name: </b>
						</label>
						<div>
							<input id="firstname" type="text" placeholder="Firstname" name="firstname" required />
						</div>
						<br />

						<label htmlFor="lastname">
							<b>* Last Name: </b>
						</label>
						<div>
							<input id="lastname" type="text" placeholder="Lastame" name="lastname" required />
						</div>
						<br />

            <label htmlFor="tel">
							<b> Phone Number: </b>{' '}
						</label>
						<div>
							<input
								id="tel"
								type="text"
								placeholder="1234567890"
								name="tel"
								pattern="[0-9]{10}"
							
							/>
						</div>
						<br />

						<label htmlFor="email">
							<b>* Email: </b>
						</label>
						<div>
							<input
								id="email"
								type="text"
								placeholder="name@email.com"
								name="email"
								required
							/>
						</div>
						<br />

						<label htmlFor="dropdownId">
							<b> I am working in: </b>
						</label>
						<div>
							<select name="dropdown" id="dropdownId">
								<option value="subject1">Art</option>
								<option value="subject2">Business</option>
								<option value="subject3">Docter</option>
                <option value="subject4">Engineering</option>
                <option value="subject5">Product</option>
							</select>
						</div>
						<br />

            <label htmlFor="dropdownId">
							<b> Years of experience: </b>
						</label>
						<div>
							<select name="dropdown" id="dropdownId">
								<option value="Year1">0-2</option>
								<option value="Year2">3-5</option>
								<option value="Year3">6-10</option>
                <option value="Year4">11-15</option>
                <option value="Year5">16+</option>
							</select>
						</div>
						<br />


						<div>
							<b>Would you like to receive text messages from us? </b>
						</div>
						<input type="radio" id="yes" name="radio" value="yes" />
						<label htmlFor="yes">Yes</label>
						<br />
						<input type="radio" id="no" name="radio" value="no" />
						<label htmlFor="no">No</label>
						<br />
						<br />

						<div>
							<b>Would you like to receive weekly email posts? </b>
						</div>
						<input type="radio" id="yes" name="radio" value="yes" />
						<label htmlFor="yes">Yes</label>
						<br />
						<input type="radio" id="no" name="radio" value="no" />
						<label htmlFor="no">No</label>
						<br />
						<br />



						<br />
						<br />
            
       
             
						<button type="submit">
							<b>Apply Now</b>
						</button>
       

						<br />
						<br />
					</div>
				</form>
			)}
		</div>
	);
};
export default Form