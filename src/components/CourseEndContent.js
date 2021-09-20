import React from 'react';

const CourseEndContent = (props) => {
        
    return (

        <div className="container text-center mt-4" id="congrats" style={{ 'maxWidth': '400px' }}>
            <img src="images/sprinkles.gif" alt="yaay" style={{ 'maxWidth': '200px' }} />
            <h1><strong>Lo lograste!</strong></h1>
            <h4>Has completado con éxito el curso Principios de Oración</h4>
            <h2>Tu promedio es:</h2>
            <h1><strong>96%</strong></h1>
        </div>
        
    );
};

export default CourseEndContent;
