import React from 'react'
import '../views/App.css';
import {Link} from 'react-router-dom'
import {getBiblionfts} from '../api/biblionfts' // instancie la variable qui représente la fonction getbiblionft 


class Home extends React.Component {

  constructor(props){
    super(props)

    this.state={
      biblionfts: [],
      close_div : '</div> <div class="row gtr-0"></div>' // instancie la variable array props qui contiendra les images 
    }
  }


  async componentDidMount(){
    const biblio = await getBiblionfts(); // affecte le retour de la fonction getbiblionft a la variable props biblionfts
    this.setState({
       biblionfts: biblio // affecte la variable bibil prededement instanciée a la variable probs 
     })
  }


  render(){

    return (
      
        <body class="is-preload">
          <section id="banner">
            <header>
              <h2>Votre collection enregistrée</h2>
            </header>
            <div class="inned gallery">
              <div>
            {
              this.state.biblionfts.map((u,i) => { // la fonction map va parcourir l'array biblionft et u prend la case courante
                i++

                return <>
                  <div class="col-4 col-12-mobile" key={u._id}> 
                      <img width="300" height="300" src={u.image_nft}></img>
                  </div>
                   {this.state.close_div}
                </>
              })
            }
            </div>
            </div>
          </section>

          <article class="container box style3">
            <header>
              <Link to="/formu"><h2>Enregistrer vos NFT</h2></Link>
            </header>
          </article>
  
          <section id="footer">
            <ul class="icons">
              <li><a href="https://opensea.io/" target="_blank" class="fas fa-hand-spock"></a></li>
            </ul>
            <div class="copyright">
              <ul class="menu">
                <li>&copy; Clément Guimard / Mankowyt Gomis</li>
              </ul>
            </div>
          </section>

        </body>
      
    );
  }
}


export default Home;
