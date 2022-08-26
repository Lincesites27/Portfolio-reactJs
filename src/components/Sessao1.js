import styles from './Sessao1.module.css'
import img from '../img/eu.png'

const Sessao1 = () => {
  return (
    <section>
      <div className={styles.container}>
       <div className={styles.row1}>
       <h1> Olá tudo bem? Bem vindo à</h1>
       <h1>Lince Sites</h1>
       <h2>Sou Desenvolvedor Web a mais de 5 anos, sou especialista em E-commerce, Landing-Page, Dropshipping, Sites Institucionais, Tráfego pago, métricas de SEO, Ux/Ui, Design e muitooo mais...</h2>
       <p>Analista de sistemas em formação, tenho total conhecimento nas principais linguagens de programação: Html5, Css3, Sass, JavaScript, Php, Wordress, Banco de dados MySqL.</p>
        <button className={styles.btn}>Já vi o que preciso e já quero!</button>
        </div> 

        <div className={styles.row2}>
          <img src={img} alt="imagemLince" />
        </div>


      </div>
    </section>
  )
}

export default Sessao1