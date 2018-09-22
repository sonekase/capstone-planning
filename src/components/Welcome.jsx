import React from 'react';
import splash from './../img/Welcome.jpg';

function Welcome(
){
  return(
    <div>
      <style jsx>{`
            .body {
              background-image: url(${splash});
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: sticky;
              height: auto;
              width: auto;
            }
            h2 {
              font-family: Helvetica Neue;
              text-align: center;
              color:  #ffe5db;
              padding-top: 85%;
              margin-bottom: -3%;
            }
            h1 {
              margin-top: 3.5%;
              font-family: Helvetica Neue;
              color: #ffe5db;
              text-align: center;
            }
          `}</style>
        <div className="body">
          <div>
            <h2>iPhoneXs</h2>
            <h1>Welcome to the big screens.</h1>
          </div>
        </div>
    </div>
  );
}

export default Welcome;
