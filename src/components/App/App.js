// import './App.css';
// import '../../components/App/App.module.css';
import Weather from '../Weather/Weather'
import Body from '../Body/Body'
import styles from "../../components/App/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <img className ={styles.Leaf} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" alt="" />

      <div className={styles.Appheader}>North Calgary Garden</div>
      <Weather/>
        <Body/>
    </div>
  );
}

export default App;
