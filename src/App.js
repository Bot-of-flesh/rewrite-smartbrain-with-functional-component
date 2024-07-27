import React, {  useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';


const partclesOptions = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.6, 0],
  scale: [.1, 0.9],
  position: "all",
  color: ["random", "#ff0000"],
  cross: "dead",
  random: 10
      };



function App() {
  const[inform, setInform] = useState('');
  const[ImageUrl, setImageurl] = useState('');
  const[box, setBox] = useState([]);
  const[route, setRoute] = useState('signin');
  const[isSignedIn, setIsSignedIn] = useState(false);
  const[user, setUser] = useState(
    {
      id : '',
      name : '',
      email :'',
      password : '',
      entries : 0,
      joined : ''
  })

  const initialState = () => {
    setInform('');
    setImageurl('');
    setBox([]);
    setRoute('signin');
    setIsSignedIn(false);
    setUser(
      {
        id : '',
        name : '',
        email :'',
        password : '',
        entries : 0,
        joined : ''
    })
  }

 const loadUser = (data) => {
    setUser({
      id: data.id,
      name : data.name,
      email: data.email,
      password: data.password,
      entries : data.entries,
      joined : data.joined
    })
  }

  const calculateFaceLocation = (data) =>{
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : data.left_col * width,
      topRow : data.top_row * height,
      rightCol : width - (data.right_col * width),
      bottomRow : height - (data.bottom_row * height)
    }
  }

  const displayFaceBox = (line) => {
    setBox(box => [...box, line]);
  }

  const OnRouteChange = (route) => {
    if(route === 'signout'){
      initialState();
    } else if (route === 'home'){
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  const onInputChange = (event) => {
    setInform(event.target.value);
  };

  const onButtonSubmit = () =>{
    setImageurl(inform);
    fetch('https://smart-brain-api-dx8u.onrender.com/imageURL', {
          method: 'post',
          mode: 'cors',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify({
              URL: inform
          })
    })
    .then(response => response.json())
    .then(result => {
      if(result.outputs[0].data.regions[0].region_info.bounding_box){
        fetch('https://smart-brain-api-dx8u.onrender.com/image', {
          method: 'put',
          mode: 'cors',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify({
              id : user.id
          })
      })
      .then(response => response.json())
      .then(count => setUser(user => ({...user, entries: count})))
    }
    setBox([]);
        const regions = result.outputs[0].data.regions;
        regions.forEach(region => {
            const boundingBox = region.region_info.bounding_box;
            displayFaceBox(calculateFaceLocation(boundingBox));
            });
        })
    .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <ParticlesBg className="particlesbg"
        params={partclesOptions}
        bg = {true}
        type = "cobweb"
      />
      <Navigation isSignIn = {isSignedIn} OnRouteChange ={ OnRouteChange } />
      { route === 'home' 
        ?<div>
            <Logo />
            <Rank name={user.name}  entries={user.entries} />
            <ImageLinkForm 
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition box={box} ImageUrl={ImageUrl}/>
         </div>
        :(
          route === 'signin'?
          <Signin OnRouteChange ={ OnRouteChange } loadUser={ loadUser }/>
          :<Register OnRouteChange ={ OnRouteChange } loadUser={ loadUser }/>
        )
      }
    </div>
  );
}

export default App;
