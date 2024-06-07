import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./homeadmin.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="records" />
          <Widget type="proffessional" />
          <Widget type="disease" />
        </div>
        
        <div className="listContainer">
          <div className="listTitle">Latest Login Users</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
