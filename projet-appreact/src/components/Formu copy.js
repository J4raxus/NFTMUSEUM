import '../views/App.css';
import React from 'react'
import {Link} from 'react-router-dom'
import * as Api from '../api/biblionfts'

class Formu extends React.Component{

    /* constructor(props){
        super(props)

        this.state={
            biblionfts : [],
            nft:[]
        }
    }


    async componentDidMount (){
        const biblionfts = await Api.getBiblionfts()
        this.setState({
            biblionfts: biblionfts
        })
    }

    async Submited(){
        const item = JSON.stringify({nom: this.state.nom,mdp: this.state.mdp, image_nft: this.state.image_nft});
        this.setState({
            nft: item
        });
        await Api.postBiblionft(item);
        this.state.biblionfts = await Api.getBiblionfts()
    }

    handleChange(e){
        e.preventDefault()
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, () => console.log("callback", this.state))
        console.log(this.state)
    } */


    render(){
        return(
            <body class="is-preload">
            <div>
                <section id="banner">
                    <article class="container">
                        <header>
                        <h2>Enregistrement NFT</h2>
                        </header>
                        <form onSubmit={() => this.Submited()}>
                            <div class="row">
                                <div class="col-6 col-12-mobile">
                                    <input class="text" placeholder="Nom d'utilisateur" type="text" name="nom" value={this.state.nom} onChange={(e) => this.handleChange(e)}></input>
                                </div>
                                <div class="col-6 col-12-mobile">
                                    <input placeholder="Mot de passe" type="password" name="mdp" value={this.state.mdp} onChange={(e) => this.handleChange(e)}></input>
                                </div>
                                <div class="col-6 col-12-mobile">
                                    <input placeholder="URL image NFT" type="text" name="image_nft" value={this.state.image_nft} onChange={(e) => this.handleChange(e)}></input>
                                </div>
                                <div class="col-12">
                                    <input class="style2" type="submit" value="Ajouter NFT"></input>
                                </div>
                            </div>
                            <br></br>
                        </form>
                        <ul>
                            {
                                this.state.biblionfts.map((u,i) => {
                                    return <>
                                    <li key={i}>{u.nom}</li>
                                    <li key={i}>{u.mdp}</li>
                                    </>})
                            }
                        </ul>  
                    </article>


                </section>
            </div>
            <br></br>
          <section>

          <div class="row">
            <div class="col-4 col-12-mobile">
                <img  src="images/choix-1.jpg"></img>
                <h3>Buy 4 NFT</h3>
                <button>Acheter</button>
            </div>
            <div class="col-4 col-12-mobile">
              <img  src="images/choix-2.jpg"></img>
              <h3>Buy 6 NFT</h3>
              <button>Acheter</button>
            </div>
            <div class="col-4 col-12-mobile">
              <img  src="images/choix-3.jpg"></img>
              <h3>Buy 9 NFT</h3>
              <button>Acheter</button>
            </div>

          </div>

          </section>
          <br></br>
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

export default Formu;