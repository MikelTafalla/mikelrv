import React from "react";
import CaseStudy from "../components/caseStudy";
import Cases from "../components/caseStudy.json";

const CaseStudyPage = () => {
    let title= "" 
    let subtitle= ""
    let summary_header= ""
    let industry=""
    let size= ""
    let url= ""
    let code= ""
    let github= ""
    let notes=""
    let requirements=""
    let technologies=""
    let overview=""
    let approach=""
    let testimonial=""
    let testimonial_role=""
    let testimonial_name=""
    let photo=""

    {Cases.filter(study => study.summary_header.includes("CleanSafe Maintenance")).map(display => (
        title= display.title, 
        subtitle= display.subtitle,
        summary_header= display.summary_header,
        industry= display.industry,
        size= display.size,
        url= display.url,
        code= display.code,
        github= display.github,
        notes=display.notes,
        overview=display.overview,
        technologies=display.technologies,
        requirements=display.requirements,
        approach=display.approach,
        testimonial=display.testimonial,
        testimonial_role=display.testimonial_role,
        testimonial_name=display.testimonial_name,
        photo=display.img
    ))}
    let techDisplay = 
    <ul>
        {technologies.map(el => (
            <li>{el}</li>
        ))}
    </ul>
    let requirementsDisplay = 
    <ul>
        {requirements.map(el => (
            <li>{el}</li>
        ))}
    </ul>
    
    return (
        <React.Fragment>
   
            
            <CaseStudy 
            title= {title} 
            subtitle= {subtitle}
            summary_header= {summary_header}
            industry= {industry}
            size= {size}
            url= {url}
            code={code}
            github={github}
            notes={notes}
            technologies={techDisplay}
            requirements={requirementsDisplay}
            overview={overview}
            approach={approach}
            testimonial={testimonial}
            testimonial_role={testimonial_role}
            testimonial_name={testimonial_name}
            photo={photo}
            />
        </React.Fragment>
    )
}

export default CaseStudyPage;