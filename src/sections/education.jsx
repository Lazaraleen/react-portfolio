import React from "react";
import {useEffect, useRef} from "react";
import educationData from "../json/education.json"; 

function Education() {
    const eduRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            eduRef.current.classList.add("active");
          observer.unobserve(eduRef.current);
        }
      })
      observer.observe(eduRef.current);
    }, []);

    return (
        <section className="colCenter" id="Education">
            <h2>Education</h2>
            <div ref={eduRef} className="animEdu">
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
            </div>
        </section>
    );
}

export default Education;