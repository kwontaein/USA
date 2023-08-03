import "../css/dashboard.scss";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Rechart from "./charts/Rechart";
import Donutchart from "./charts/Donutchart";
import Donutchart2 from "./charts/Donutchart2";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-title">
        Dashboard
      </div>
      <div className="dashboard-contents">
        <div className="dashboard-contents1">
          <div className="dashboard-card">
            <div className="dashboard-img-container"><PersonAddIcon className="dashboard-img" /></div>
            <div>
              신규 가입자 수
              <span className="dashboard-cardcontent"><br />120</span>
            </div>
            <hr />
            <div className="dashboard-cardinfo">
              전일 대비 : <span className="ans">+10</span>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-img-container"><UmbrellaIcon className="dashboard-img" /></div>
            <div >
              우산 사용 횟수
              <span className="dashboard-cardcontent"><br />132</span>
            </div>
            <hr />
            <div className="dashboard-cardinfo">
              전일 대비 : <span className="ans">+3</span>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-img-container"><NotificationsActiveIcon className="dashboard-img" /></div>
            <div>
              신규 문의 사항
              <span className="dashboard-cardcontent"><br />13</span>
            </div>
            <hr />
            <div className="dashboard-cardinfo">
              전일 대비 : <span className="ans">+10</span>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-img-container"><BeachAccessIcon className="dashboard-img" /></div> <div>
              현재 사용 중인 우산
              <span className="dashboard-cardcontent"><br />3</span>
            </div>
            <hr />
            <div className="dashboard-cardinfo">
              남은 우산 : <span className="ans">5</span>
            </div>
          </div>
        </div>
        <div className="dashboard-contents2">
          <div className="dashboard-charts">
            <div className="chart-title">주간 사용자 수</div>
            <Rechart />
          </div>
          <div className="dashboard-charts">
            <div className="chart-title">주간 우산 사용 횟수</div>
            <Rechart />
          </div>
          <div className="dashboard-charts">
            <div className="chart-title">주간 측정 강수량</div>
            <Rechart />
          </div>
        </div>
        <div className="dashboard-contents3">
          <div className="dashboard-projects">
            <div className="Donut-chart">
              <span>문의사항 비율</span>
              <Donutchart />
            </div>
            <div className="Donut-chart2">
              <span>다른거 비율</span>
              <Donutchart2 />
            </div>
          </div>
          <div className="dashboard-notification">문의사항
            <div className="dashboard-list">
              <ul>
                <li>여기는</li>
                <li>아직</li>
                <li>제작</li>
                <li>중</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="my-website-title">USA - Kingsman</div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;