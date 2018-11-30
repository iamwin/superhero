<?php
    /*
        查询数据库是否有这样商品('GET')
        name=name(商品名称);
     */
    
    //连接数据库,并判断是用GET还是POST方式
    include 'connect.php';
    $name=$_GET{'name'};//获取名称
    // $name=isset($_GET['name']) ? $_GET['name'] : '';
    $sql="SELECT * FROM shoppingcar WHERE name='$name'";
    $res=$conn->query($sql);
    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
            //数据库存储该用户名
            echo 1;
        }else{
            echo 0;
        }

    //关闭数据库
    $conn->close();
?>