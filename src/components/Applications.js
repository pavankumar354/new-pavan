import React,{useState} from 'react';
import "../styles/Applications.css"
import appimg1 from "../images/Defect.png";
import appimg2 from "../images/defect cate.png";
import appimg3 from "../images/top-view-budget-planning-note-with-pens-gray-surface-job-copybook-school-student-business-work-college-money-budget.jpg";
import appimg4 from "../images/finan.png";
 
const features = [
    {
        id: 1,
        title: 'Accuracy and efficiency in identifying products',
        image: appimg1
    },
    {
        id: 2,
        title: 'Aids in budgeting and decision-making processes',
        image: appimg3
    },
    {
        id: 3,
        title: 'Facilitates targeted solutions and remediation efforts',
        image: appimg2
    },
    {
        id: 4,
        title: 'Optimizes cost management and resource allocation',
        image: appimg4
    }
];
   
 export default function Applications2() {
    const [selectedFeature, setSelectedFeature] = useState(features[0]);
   
    return (
      <div className='feature-container'>
        <h1 className='feature-head'>Applications</h1>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={feature.id}
                 onClick={() => setSelectedFeature(feature)}
                 className={idx % 2 === 0 ? `feature-tile-even ${selectedFeature.id === feature.id ? 'active' : ''}` : `feature-tile-odd ${selectedFeature.id === feature.id ? 'active' : ''}`}
                 onMouseEnter={() => setSelectedFeature(feature)}>
              <div className="feature-icon">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-info">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }