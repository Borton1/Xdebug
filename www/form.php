<?php
$inp = $_POST['ourForm_inp'];
switch ($inp){
    case 'Гарри':
        echo 'Griffindor';
        break;
    case 'Germiona':
        echo 'Not Griffindor';
        break;
    default:
        echo 'F, magl';
}