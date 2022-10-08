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
          <section>
            <header>
              <center>
              <h2>Your plots</h2>
              </center>
            </header>

          <section>
          <div class="row">
            <div class="col-3 col-12-mobile">
                <center>
                <img  src="images/choix-1.jpg"></img>
                <h3>Package 4 NFT</h3>
                </center>
            </div>
            <div class="col-3 col-12-mobile">
              <center>
              <img  src="images/choix-neutre.jpg"></img><br></br>
              <button>Buy more</button>
              </center>
              
            </div>
            <div class="col-3 col-12-mobile">
              
            </div>
            <div class="col-3 col-12-mobile">
              
            </div>
            
          </div>
          </section>


          
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

          <header>
              <center>
              <h2>Your selected NFT </h2>
              </center>
            </header>

          <section>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/1.jpeg"></img>
                  <p>Young Rich Lemur #0001</p>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
              <center>
                  <img  src="images/3.jpeg"></img>
                  <p>Young Rich Lemur #0003</p>
                  </center>
                
              </div>
              <div class="col-3 col-12-mobile">
              <center>
                  <img  src="images/8.jpeg"></img>
                  <p>Young Rich Lemur #0008</p>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
              <center>
                  <img  src="images/20.jpeg"></img>
                  <p>Young Rich Lemur #0020</p>
                  </center>
              </div>
            </div>
            
          </section>
          
          <section id="footer">
            <ul class="icons">
              <li><a href="https://opensea.io/" target="_blank" class="fas fa-hand-spock"></a></li>
            </ul>
            <div class="copyright">
              <ul class="menu">
                <li>&copy; Clément Guimard / Mankowyt Gomis</li>
                <li><a href='#'>Informations légales</a></li>
                <li><a href='#'>CGV</a></li>
              </ul>
            </div>
          </section>

        </body>
      
    );
  }
}


export default Home;
