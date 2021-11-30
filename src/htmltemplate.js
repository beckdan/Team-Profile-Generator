function generateTeamCards(team){
    const html = []
    for(const member of team){
        switch(member.getRole()){
            case "Manager":
                html.push(generateManagerCard(member))
            case "Engineer":
                html.push(generateEngineerCard(member))
            case "Intern":
                html.push(generateInternCard(member))
        }
    }
    return html.join('')
}


function generateManagerCard(manager){
   return `<div class="card" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
        <h2>${manager.getName()}</h2>
        <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body bg-light">
      <ul>
          <li>ID:${manager.getId()}</li>
          <li>Email:${manager.getEmail()}</li>
          <li>Office Number:${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`
}

function generateEngineerCard(manager){
   return `<div class="card" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
        <h2>${manager.getName()}</h2>
        <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body bg-light">
      <ul>
          <li>ID:${manager.getId()}</li>
          <li>Email:${manager.getEmail()}</li>
          <li>Office Number:${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`
}

function generateManagerCard(manager){
   return `<div class="card" style="max-width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
        <h2>${manager.getName()}</h2>
        <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body bg-light">
      <ul>
          <li>ID:${manager.getId()}</li>
          <li>Email:${manager.getEmail()}</li>
          <li>Office Number:${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>`
}





module.exports = teamArray => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>My Team</title>
    </head>
    <body>
       <div class="container">
            <div class="row">
                <div class="col-12 jumbotron mb-3">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
       </div>
    
       <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">${generateTeamCards(teamArray)}</div>
            </div>
       </div>
    </body>
    </html>`
}