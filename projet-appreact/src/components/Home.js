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
          <div>
          <br></br>
          <section>
          <div class="but0 tttt">
            <h3>Welcome to the open world of NFT Museum</h3>
            <br></br>
          </div>

          <article class="container box style1 right ttt">
            <a href="#" class="image fit"><img src="images/port.jpg" alt=""></img></a>
            <div class="inner">
              <header>
                <h2>Who is NFT Museum</h2>
              </header>
              <p>We are 2 young students who want to share our passion for art, computer science and NFT.</p> <br></br>
              <p>We asked ourselves, why we can see the paintings in museums or at home<br></br>
              but not the NFT? That's why we developed NFT Museum.</p><br></br>
              <p>And why not share all together?</p>
              <button>Sign up now</button>
            </div>
          </article>

          <article class="container box style1 left ttt">
            <a href="#" class="image fit"><img src="images/VR.jpg" alt=""></img></a>
            <div class="inner">
              <header>
                <h2>Why NFT Museum</h2>
              </header>
              <p>Do you want to see your NFT and your friends' NFT in a virtual reality world? <br></br> You are at the right place.<br></br> Register now to start your adventure.</p>
              <button>Sign up now</button>
            </div>
          </article>
          
      <article class="container box style2 ttt">
				<header>
					<h2>Don't Worry</h2>
					<p>Discover our video presentation to<br></br>
					understand the splendor of the project!</p>
				</header>
        
				
			</article>
      <br></br>
      <div class="gallery">
					<div class="row gtr-0">
            <div class="col-12 col-12-mobile">
              <iframe width="1000" height="500" src="https://www.youtube-nocookie.com/embed/NIZEbal-VvU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
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
          </div>
        </body>
      
    );
  }
}


export default Home;
