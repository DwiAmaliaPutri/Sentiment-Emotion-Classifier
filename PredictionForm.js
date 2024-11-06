import React, { useState } from 'react';

function PredictionForm({ onSubmit, latestPrediction }) {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputText);
        setInputText('');
    };

    return (
        <div >
            {/* Form Input */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleChange}
                    placeholder="Enter a customer review here..."
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Predict</button>
            </form>

            {/* Tampilkan Hasil Prediksi Terbaru di bawah Form Input */}
            {latestPrediction && (
                <div style={resultStyle}>
                    <h3>Output Prediction :</h3>
                    <p><strong>Review:</strong> {latestPrediction['Customer Review']}</p>
                    <p><strong>Sentimen:</strong> {latestPrediction['Sentimen']}</p>
                    <p><strong>Emotion:</strong> {latestPrediction['Emotion']}</p>
                </div>
            )}
        </div>
    );
}


const inputStyle = {
    width: '80%',
    padding: '5px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
    marginRight: '10px',
};

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const resultStyle = {
    width: '80%',
    maxWidth: '600px', // Mengatur lebar maksimum agar tidak terlalu besar
    backgroundColor: '#f0f8ff',
    color: '#2c3e50',
    padding: '0.5rem',
    marginTop: '10px', // Menempatkan elemen di bawah form input
    marginLeft: 'auto', // Memusatkan secara horizontal
    marginRight: 'auto', // Memusatkan secara horizontal
    borderRadius: '8px',
    textAlign: 'center',
};

export default PredictionForm;