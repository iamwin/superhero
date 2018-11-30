<?php
    /*
        添加或减少商品的数量('GET')
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';

    $val2=isset($_GET['val2']) ? $_GET['val2'] : '';
    $val=isset($_GET['val']) ? $_GET['val'] : '';
    $sql="update shoppingcar set number=$val where name='$val2'";

    $res=$conn->query($sql);
        if($res){
            echo 'yes';//成功
        }else{
            echo 'no';//失败
        };
          //关闭结果集
        // $res->close();
        //关闭数据库
        $conn->close();

?>