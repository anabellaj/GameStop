import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';


export default function Mainpage() {
  return (
    <div>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
            <NavBar />
        </div>

        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
            <Footer/>  
        </div>
    </div>
  )
}