import React from 'react';

function PredictionList({ predictions }) {
    // Fungsi untuk menghitung jumlah Sentimen dan Emosi dengan filtering
    const countLabels = (predictions) => {
        const sentimentCount = { Positive: 0, Negative: 0 };
        const emotionCount = { Happy: 0, Love: 0, Sadness: 0, Fear: 0, Anger: 0 };

        predictions.forEach((prediction) => {
            sentimentCount[prediction.Sentimen]++;
            emotionCount[prediction.Emotion]++;
        });

        return { sentimentCount, emotionCount };
    };

    const { sentimentCount, emotionCount } = countLabels(predictions);

    return (
        <div style={containerStyle}>
            {/* Menampilkan perhitungan label sentimen dan emosi */}
            <div style={labelCountContainerStyle}>
                <div style={labelCountStyle}>
                    <h3>Sentimen Count:</h3>
                    <p>
                        👍🏼Positive: {sentimentCount.Positive} | 👎🏼Negative: {sentimentCount.Negative}
                    </p>

                    <h3>Emotion Count:</h3>
                    <p>
                        😁Happy: {emotionCount.Happy} | 🥰Love: {emotionCount.Love} | 😢Sadness: {emotionCount.Sadness} | 😨Fear: {emotionCount.Fear} | 😡Anger: {emotionCount.Anger}
                    </p>
                </div>
            </div>

            {predictions.length === 0 ? (
                <p style={emptyTextStyle}>No predictions available.</p>
            ) : (
                <table style={tableStyle}>
                    <caption style={tableCaptionStyle}>Predictions Table</caption>
                    <thead>
                        <tr>
                            <th style={tableHeaderStyle}>Customer Review</th>
                            <th style={tableHeaderStyle}>Sentiment</th>
                            <th style={tableHeaderStyle}>Emotion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {predictions.map((prediction, index) => (
                            <tr key={index} style={tableRowStyle}>
                                <td style={tableDataStyle}>{prediction['Customer Review']}</td>
                                <td style={tableDataStyle}>{prediction['Sentimen']}</td>
                                <td style={tableDataStyle}>{prediction['Emotion']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px', // Space between the label count and the table
    padding: '8px'
};

const labelCountContainerStyle = {
    flex: 1.5, // Make the label count container take up more space
    maxWidth: '450px', // Increase the maximum width
    padding: '14px',
    backgroundColor: '#ecf0f1',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for a cleaner look
};

const labelCountStyle = {
    textAlign: 'left',
    fontSize: '16px', // Adjust font size for better readability
    lineHeight: '1.5', // Increase line height for better spacing between lines
    color: '#34495e',
};

const emptyTextStyle = {
    color: '#7f8c8d',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontStyle: 'italic',
};

const tableStyle = {
    flex: 1.5, // Adjusts the width of the table container
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
};

const tableCaptionStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#ecf0f1',
    color: '#34495e',
};

const tableHeaderStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 'bold',
};

const tableRowStyle = {
    borderBottom: '1px solid #ecf0f1',
};

const tableDataStyle = {
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#34495e',
    wordWrap: 'break-word',
};

export default PredictionList;
