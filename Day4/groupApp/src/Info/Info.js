import "./style1.css";
import exp from '../../images/experience.png';
import loc from '../../images/location.png'
import comp from '../../images/portfolio.png';
const Info = (props) => {
  const { details } = props;
  const { id, name, company, location, experience } = details;
  return (
    <div className="content">
      <div className="imgDiv">
        <>
          <h1 className="imglogo">{name.charAt(0)}</h1>
        </>
      </div>
      <h1 className="heading">{name}</h1>
      <div className="compDiv">
      <img className="imgC" src={comp} alt=''/>
      <p className="para1">{company}</p>
      </div>
      <div className="lastDiv">
        <div className="smallDiv">
          <img className="imgS" src={exp} alt=""/>
          <p className="para">{experience}</p>
        </div>
        <div className="smallDiv line">
          <img className="imgS" src={loc} alt=""/>
          <p className="para">{location}</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
