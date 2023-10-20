import './App.css';
import Appform from './component/Appform';
import C01componente from './component/C01componente';
import Variable from './component/C04variable';

function App() {
  return (
    <div 
    style={{background:"yellow", 
    width:"350px", 
    padding:"10px"}}>
      <Appform/>
      <i class="large material-icons">insert_chart</i>

      <p>1.Juan Manuel 23 Masculino  ----x -- A</p>
      <p>2.Rosa Maria  25 Femenino   ----x -- A</p>
      <p>3.Luis Miguel 23 Masculino  ----x -- A</p>
    
    </div>
  );
}

export default App;
