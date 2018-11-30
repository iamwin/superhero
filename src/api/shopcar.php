<?php
  /*
        将商品的id和数量添加到购物车里('GET')
        id=id(商品id)
        number=num(商品数量)
     */
    
    //连接数据库,并判断是用GET还是POST方式
  include 'connect.php';

  //购买商品的id
  $id=isset($_GET['id']) ? $_GET['id'] : '';
  // 购买商品数量
  $num=isset($_GET['num']) ? $_GET['num'] : '';
  $sql1=SELECT * FROM gouwuche where id=$id;
  $sql2=update gouwuche set quantity=$num where id=$id;


  $res1=$conn->query($sql1);
  $res2=$conn->query($sql2);

  $row1=$res1->fetch_all(MYSQLI_ASSOC);
  $row2=$res2->fetch_all(MYSQLI_ASSOC);
  $obj=array(
        'id'=>$row1,
        'num'=>$row2
    );
 
  echo json_encode($obj,JSON_UNESCAPED_UNICODE);

  //关闭结果集
    $res->close();
    //关闭数据库
    $conn->close();
?>