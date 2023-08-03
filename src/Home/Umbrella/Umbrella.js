import "../../css/Umbrella.scss";
import Useum from "./Useum";

const Umbrella = () => {
 
  return (
    <div className="Um-wrapper">
      <div className="Um-title">
        우산 관리
      </div>
      <div className="Um-contents">
        <div className="Um-contents1">
          <div className="Um-Nowuse">
            <Useum/>
          </div>
          <div className="Um-Notuse">
            <Useum/>
          </div>
        </div>
        <div className="Um-contents2">
          hi
        </div>
      </div>
    </div>
  )
}
export default Umbrella;