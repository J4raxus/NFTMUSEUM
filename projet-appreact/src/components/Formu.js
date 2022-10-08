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
            <section>
                <div>
                    <br></br>
                    <center>
                    <p>You can purchase an NFT package as you wish to define the size of your parcel, which will then be created in the NFT Museum world.</p>
                    </center>
                </div>
            </section>
            <br></br>
          <section>

          <div class="row">
            <div class="col-4 col-12-mobile">
                <center>
                <img  src="images/choix-1.jpg"></img>
                <h2>4,99$</h2>
                <h3>Package 4 NFT</h3>
                <button>Already Purchased</button>
                </center>
            </div>
            <div class="col-4 col-12-mobile">
              <center>
              <img  src="images/choix-2.jpg"></img>
              <h2>7,49$</h2>
              <h3>Package 6 NFT</h3>
              <button>Buy</button>
              </center>
            </div>
            <div class="col-4 col-12-mobile">
              <center>
              <img  src="images/choix-3.jpg"></img>
              <h2>9,99$</h2>
              <h3>Package 9 NFT</h3>
              <button>Buy</button>
              </center>
            </div>
            
          </div>
          <br></br>
            <section>
                <div>
                    <center>
                    <span>For any information request, please contact our support : support@nftmuseum.com</span>
                    </center>
                    <br></br>
                </div>
            </section>

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

export default Formu;