<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        require('config/connection.php');
        // If form submitted, insert values into the database.
        if (isset($_REQUEST['submit'])){
             $id_user = $_POST["id_user"];
             $nama = $_POST["nama"];
             $email = $_POST["email"];
             $password = $_POST["password"];

             $query_sql = "INSERT INTO tryuser (id_user, nama, email, password)
                            VALUES ('$id_user','$nama', '$email', '$password')";
            }else{
    ?>
    <div class="wrapper">
        <h1>Sign Up</h1>
        <div class="form-signup">
            <form>
                <div class="input-box">
                    <input type="text" name="nama" id="name" placeholder="Masukkan Nama">
                </div>
                <div class="input-box">
                    <input type="text" name="email" id="email" placeholder="Masukkan Email">
                </div>
                <div class="input-box">
                    <input type="password" name="password" id="password" placeholder="Masukkan Password">
                </div>
                <div class="captchaBackground">
                    <canvas id="captcha">captcha text</canvas>
                </div>
                <button id="refreshButton" type="submit">Refresh</button>
                <div class="input-box">
                    <input id="textBox" type="text" name="text" placeholder="Masukkan Captcha">
                </div>
                <button type="submit" class="btn" name="submit">Submit</button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
    <?php } ?>
</body>
</html>