<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/global.css">
    <title>Add funds</title>
</head>

<body>
    <?php require_once('./mod/header.php');

    if (isset($_POST['IBAN']) && isset($_POST['amount'])) {

        if (strlen($_POST['IBAN']) != 20 || !(is_numeric($_POST['amount'])) || $_POST['amount'] < 0) {
            $message = "Invalid data";
            echo "<script type='text/javascript'>
            alert('$message');
            window.location.replace('/DDAPI-cypress/other/bank-v1/add_funds.php');
            </script>";
            header('/DDAPI-cypress/other/bank-v1/add_funds.php');
            die();
        }
        $listData = json_decode(file_get_contents('./db/db.json'), true);
        for ($row = 0; $row < count($listData); $row++) {
            if ($listData[$row]['IBAN'] == $_POST['IBAN']) {
                $listData[$row]['balance'] += $_POST['amount'];
                file_put_contents('./db/db.json', json_encode($listData));
                $message = "Money has been sent";
                echo "<script type='text/javascript'>
                alert('$message');
                window.location.replace('/DDAPI-cypress/other/bank-v1/accounts.php');
                </script>";
                header('/DDAPI-cypress/other/bank-v1/accounts.php');
                die();
            }
        }

        $message = "Can't find user with this IBAN";
        echo "<script type='text/javascript'>
        alert('$message');
        window.location.replace('/DDAPI-cypress/other/bank-v1/add_funds.php');
        </script>";
        header('/DDAPI-cypress/other/bank-v1/add_funds.php');
        die();
    }

    ?>
    <h1>Send money</h1>
    <div class="form">
        <form action="" method="POST">
            <span>IBAN:</span>
            <input type="text" name="IBAN" value="<?php
                                                    if (isset($_GET['id'])) {
                                                        $listData = json_decode(file_get_contents('./db/db.json'), true);
                                                        for ($row = 0; $row < count($listData); $row++) {
                                                            if ($listData[$row]['id'] == $_GET['id']) {
                                                                echo $listData[$row]['IBAN'];
                                                            }
                                                        }
                                                    }
                                                    ?>">

            <span>Amount:</span>
            <input type="text" name="amount" value="">

            <input type="submit" value="Submit">
        </form>
    </div>
</body>

</html>