<?php
    /*
        登录('POST')
        username=username(登录页填的用户名);
        password=password(登录页填的密码);
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $username=isset($_POST['username']) ? $_POST['username'] : '';
    $password=isset($_POST['password']) ? $_POST['password'] : '';
    $sql="SELECT * FROM login where name=$username AND password=$password";
    $res=$conn->query($sql);
    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
            //数据库存储该用户名
            echo 0;
        }else{
            echo 1;
        }

    //关闭数据库
    $conn->close();

?>