import React from "react";
import {useEffect, useRef} from "react";
import skillsData from "../json/skills.json";

function Skills() {
    const skillRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            skillRef.current.classList.add("active");
        }
      })
      observer.observe(skillRef.current);
    }, []);

  return (
    <section className="colCenter skills" id="Skills">
        <h2>Skills</h2>
        <div>
            <article ref={skillRef} className="skillsGrid">
                {skillsData && skillsData.map((item) => (
                    <aside key={item.name}>
                        <div className="bubbleGrey">
                            <img src={item.image} alt={item.alt} className={item.className}/>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.level}</p>
                    </aside>
                ))}
            </article>            
        </div>
    </section>
  );
}

export default Skills;