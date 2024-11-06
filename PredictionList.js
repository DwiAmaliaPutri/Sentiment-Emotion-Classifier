import React from 'react';

function PredictionList({ predictions }) {
    return (
        <div>
            {predictions.length === 0 ? (
                <p style={emptyTextStyle}>No predictions available.</p>
            ) : (
                <table style={tableStyle}>
                    <caption style={tableCaptionStyle}>Predictions Table</caption> {/* Added table caption */}
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

const emptyTextStyle = {
    color: '#7f8c8d',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontStyle: 'italic',
};

const tableStyle = {
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
    backgroundColor: '#2c3e50',  // Dark blue-grey background
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
    color: '#34495e',  // Dark grey-blue text color
    wordWrap: 'break-word',  // Ensures text wraps and doesn’t overflow
};

export default PredictionList;
