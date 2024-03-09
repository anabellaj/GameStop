import Club from '../../Components/Clubes/Club.jsx'
import styles from './MainPage.module.css'

export default function MainPage() {
  return (
    <div >
      <h1 style={{marginTop:'65px'}}>Clubes Disponibles</h1>
    <div className={styles.page}>
        <Club name='Club de Aventureros' description= 'Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura'  state={false}></Club>
        <Club name='Club de Estrategia' description='Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.' state={true}></Club>
    </div>
    </div>
  )
  
}