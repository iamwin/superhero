/*
Navicat MySQL Data Transfer

Source Server         : Win
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 666

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-29 16:35:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('150', '海南椰子(单个)约900g', '4', '2', '12.80');
INSERT INTO `shoppingcar` VALUES ('146', '美国进口红提子4kg', '1', '3', '163.00');
INSERT INTO `shoppingcar` VALUES ('147', '山东红富士苹果8#15kg', '2', '2', '256.00');
INSERT INTO `shoppingcar` VALUES ('148', '河北蜜梨12kg', '3', '4', '108.00');
SET FOREIGN_KEY_CHECKS=1;
