import React from "react";
import educationData from "../json/education.json"; 

// Regarder pour que l'animation se lance quand l'écran est dessus

function Education() {
    return (
        <section className="colCenter" id="Education">
            <h2>Education</h2>
            {educationData.map((item, index) => (
                <article className="diplome" key={index}>
                    <div className="year">{item.year}</div>
                    <div className="dip">
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.complement}</p>
                        </div>
                        <p>{item.place}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Education;