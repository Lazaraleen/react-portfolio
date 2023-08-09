import React from "react";
import experienceData from "../json/experience.json"

function Experience() {
  return (
    <section className="colCenter" id="Experience">
        <h2>Expérience</h2>
        <article className="experience">
            {experienceData.map((item, index) => (
                <aside className="box" key={index+30}>
                    <div>
                        <h3>{item.title}</h3>
                        <h4>{item.year}</h4>
                        <p>{item.description}</p>
                    </div>
                </aside>
            ))}
        </article>
    </section>
  );
}

export default Experience;