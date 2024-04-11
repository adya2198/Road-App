import React, { useState } from "react";
import axios from "axios";
import "./home1.css"; // Import CSS file

function Home1() {
    const [cement, setCement] = useState('');
    const [asphalt, setAsphalt] = useState('');
    const [concrete, setConcrete] = useState('');
    const [stones, setStones] = useState('');
    const [labour, setLabour] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    async function submitData(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/update-data", {
                cement,
                asphalt,
                concrete,
                stones,
                labour
            });
            setSuccessMessage("Data updated successfully!");
            // Clear form fields after successful submission
            setCement('');
            setAsphalt('');
            setConcrete('');
            setStones('');
            setLabour('');
        } catch (error) {
            console.error("Error submitting data:", error);
            setSuccessMessage("Failed to update data. Please try again later.");
        }
    }

    return (
        <div className="Home-container">
            <section id="update-data">
                <h2>Update Data</h2>
                <form onSubmit={submitData}>
                    <div className="form-group">
                        <label htmlFor="cement">Cement:</label>
                        <input type="text" id="cement" value={cement} onChange={(e) => setCement(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="asphalt">Asphalt:</label>
                        <input type="text" id="asphalt" value={asphalt} onChange={(e) => setAsphalt(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="concrete">Concrete:</label>
                        <input type="text" id="concrete" value={concrete} onChange={(e) => setConcrete(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stones">Stones:</label>
                        <input type="text" id="stones" value={stones} onChange={(e) => setStones(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="labour">Labour:</label>
                        <input type="text" id="labour" value={labour} onChange={(e) => setLabour(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                </form>
            </section>
        </div>
    );
}

export default Home1;
