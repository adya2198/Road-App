import React, { useState } from "react";
import axios from "axios";
import "./Home.css"; // Import CSS file

function Home() {
    const [name, setName] = useState('');
    const [complaintType, setComplaintType] = useState('Pothole');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    async function submitComplaint(e) {
        e.preventDefault();

        try {
            // Here you can make an API call to submit the complaint data
            await axios.post("http://localhost:8000/complaint", {
                name,
                complaintType,
                location,
                description
            });
            // Optionally, you can display a success message or perform other actions
            setSuccessMessage("Complaint submitted successfully!");
            // Clear form fields after successful submission
            setName('');
            setComplaintType('Pothole');
            setLocation('');
            setDescription('');
        } catch (error) {
            // Handle error, display error message, etc.
            console.error("Error submitting complaint:", error);
            setSuccessMessage("Failed to submit complaint. Please try again later.");
        }
    }

    return (
        <body>
        <div className="Home-container">
            <section id="raise-complaint">
                <h2>Raise Complaint</h2>
                <form onSubmit={submitComplaint}>
                    <div className="form-group">
                        <label htmlFor="Name">Name:</label>
                        <textarea id="Name" rows="1" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complaint-type">Complaint Type:</label>
                        <select id="complaint-type" value={complaintType} onChange={(e) => setComplaintType(e.target.value)}>
                            <option value="Pothole">Pothole</option>
                            <option value="Broken Road">Broken Road</option>
                            <option value="Very Bad Condition">Very Bad Condition</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Location">Location:</label>
                        <textarea id="Location" rows="2" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complaint-description">Description:</label>
                        <textarea id="complaint-description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </form>
            </section>
        </div>
        </body>
    );
}

export default Home;
