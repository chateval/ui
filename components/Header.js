const Header = () => (
  <div>
    <head>
      <title> ChatEval </title>
      <link rel="stylesheet" href="static/style.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>

    </head>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://chateval.org">ChatEval</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/models">View Systems</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/conversations">View Conversations</a>
          </li>
		  <li className="nav-item dropdown">
          	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          	Challenges
        	</a>
        	<div className="dropdown-menu" aria-labelledby="navbarDropdown">
          		<a className="dropdown-item" href="/dbdc5">DBDC5</a>
          		<a className="dropdown-item" href="/dstc10">DSTC10</a>
              <a className="dropdown-item" href="/dstc11">DSTC11</a>
              <a className="dropdown-item" href="/dstc12">DSTC12</a>
        	</div>
     	 </li>
          <div className="vl"></div>
          <li className="nav-item">
            <a className="nav-link" href="https://my.chateval.org/uploads">My ChatEval</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
  
export default Header;
