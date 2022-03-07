import React, { Component } from 'react';
import './Glasses.css'
class Glasses extends Component {
     arrGlasses = [
          {
               "id": 1,
               "price": 30,
               "name": "GUCCI G8850U",
               "url": "./v1.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 2,
               "price": 50,
               "name": "GUCCI G8759H",
               "url": "./v2.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 3,
               "price": 30,
               "name": "DIOR D6700HQ",
               "url": "./v3.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 4,
               "price": 70,
               "name": "DIOR D6005U",
               "url": "./v4.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 5,
               "price": 40,
               "name": "PRADA P8750",
               "url": "./v5.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 6,
               "price": 60,
               "name": "PRADA P9700",
               "url": "./v6.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 7,
               "price": 80,
               "name": "FENDI F8750",
               "url": "./v7.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 8,
               "price": 100,
               "name": "FENDI F8500",
               "url": "./v8.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          },
          {
               "id": 9,
               "price": 60,
               "name": "FENDI F4300",
               "url": "./v9.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          }
     ]
     state = {
          glasses: {
               "id": 1,
               "price": 30,
               "name": "GUCCI G8850U",
               "url": "./v1.png",
               "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
          }
     }
     SetGlasses(newGlasses) {
          this.setState({ glasses: newGlasses })
     }
     RenderGlasses(glasses) {
          return (
               <div key={glasses.id} onClick={() => {
                    this.SetGlasses(glasses)
               }} className="glasses-item col-2">
                    <img src={`./img/${glasses.url}`} alt="" />
               </div>
          )
     }
     glassesList = () => {
          return this.arrGlasses.map((item) => {
               return this.RenderGlasses(item)
          })
     }
     render() {
          let { glasses } = this.state
          return (
               <div className='main' >
                    <div className="title">
                         TRY GLASSES APP ONLINE
                    </div>
                    <div className='content container'>
                         <div className="model row">
                              <div className="model__right col-6">
                                   <img src="./img/model.jpg" alt="" />
                                   <div className="glasses-card">
                                        <div className="glasses-model">
                                             <img src={`./img/${glasses.url}`} alt="" />
                                        </div>
                                        <div className="glasses-info">
                                             <h5>{glasses.name}</h5>
                                             <span className="bg-danger p-1">{glasses.price}$</span>
                                             <span className="text-success p-1"> Stocking</span>
                                             <p>{glasses.desc} </p>
                                        </div>
                                   </div>
                              </div>
                              <div className="model__left col-6">
                                   <img src="./img/model.jpg" alt="" />
                              </div>
                         </div>
                         <div className="glasses-list row">
                              {this.glassesList()}
                         </div>
                    </div>
               </div>
          )
     }
}

export default Glasses;