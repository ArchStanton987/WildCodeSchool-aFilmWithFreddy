import React from 'react';
import './Graveyard.css'

function Graveyard({userName, userFear, userDob}) {
  return(
    <div className="graveyard">
      <button>Retour à l'accueil</button>
      <p className="userGrave"> {userName} </p>
      <p className="userDobDod"> {userDob} - 2019 </p>
      <p className="userDeath"> {userFear} </p>
    </div>
  );
}

export default Graveyard;