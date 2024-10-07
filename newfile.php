<html>
<home>
   Docente <?php echo $_GET['name']; ?><br>
   participants<?php echo $_GET['PNum']; ?><br>
   date<?php echo $_GET['DateT']; ?><br>
   city<?php echo $_GET['Cities']; ?><br>
   
   mean of transport<?php $name = $_GET['mezzo'];
    foreach ($name as $mezzo){echo $mezzo."<br />";}?>
   
   treatment<?php echo $_GET['treatment']; ?><br>
   
   
   quota procapite<?php echo $_GET['PerCapitaCost']; ?><br>
   email<?php echo $_GET['email']; ?><br>
    notes<?php echo $_GET['notes']; ?><br>

</home>
</html>