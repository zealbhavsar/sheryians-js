<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Doc</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body { 
      width: 100%;
      height: 100%;   
    }
    input{
      display: block;
    }

    #main {
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #fdfcfc;
      flex-direction: column;
    }

    </style>
  <style>

    

    #hide {
      display:none;
    }

      small{ 
        color: red;
        font-size: 12px;
      }
    
  </style>
</head>
<body>
  


  <form>
        <input id="name" type="text"placeholder="name">
        <div id="hide"> 
          <br><br><br>
        </div>
        <small>Your name should be greater than 2 character</small>
        <br><br>
    <input type="email"placeholder="email">
    <br><br>
    <input type="password"placeholder="password">
    <br><br>
    <select>
      <option value="male">male</option>
      <option value="male">female</option>
      <option value="male">other</option>
    </select>
    <br><br>

<textarea placeholder="tell us about yourself"></textarea>
<br><br>

<input type="submit">

  </form>

  
    
  
  <script src="forms validation.js"></script>
</body>
</html>








let nm = document.querySelector(#name);
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault(); // to stop the form submit 
    if (nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";


    } 
    else {
document.querySelector("#hide").style.display = "initial";
    }
})
