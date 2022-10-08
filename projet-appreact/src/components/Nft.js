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
              <h3>Select your NFT to NTF MUSEUM</h3>
              <button class='tit'>Synchronization</button>
              </center>
            </header>

          <section>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/1.jpeg"></img>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/2.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/3.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/4.jpeg"></img>
                </center>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/5.jpeg"></img>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/6.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/7.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/8.jpeg"></img>
                </center>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/9.jpeg"></img>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/10.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/11.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/12.jpeg"></img>
                </center>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/13.jpeg"></img>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/14.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/15.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/16.jpeg"></img>
                </center>
              </div>
            </div>
            <div class="row">
              <div class="col-3 col-12-mobile">
                  <center>
                  <img  src="images/17.jpeg"></img>
                  </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/18.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/19.jpeg"></img>
                </center>
              </div>
              <div class="col-3 col-12-mobile">
                <center>
                  <img  src="images/20.jpeg"></img>
                </center>
              </div>
            </div>
          </section>

          <center>
            <button class='tit'>Synchronization</button>
          </center>
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
