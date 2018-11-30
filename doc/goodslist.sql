/*
Navicat MySQL Data Transfer

Source Server         : Win
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 666

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-26 20:55:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `buy` decimal(6,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '1', '美国进口红提子4kg', '163.00', '493');
INSERT INTO `goodslist` VALUES ('2', '2', '山东红富士苹果8#15kg', '256.00', '355');
INSERT INTO `goodslist` VALUES ('3', '3', '河北蜜梨12kg', '108.00', '438');
INSERT INTO `goodslist` VALUES ('4', '4', '海南椰子(单个)约900g', '12.80', '342');
INSERT INTO `goodslist` VALUES ('5', '5', '越南火龙果礼箱3.3kg', '54.80', '384');
INSERT INTO `goodslist` VALUES ('6', '6', '新疆库尔勒香梨6.5kg', '116.00', '446');
INSERT INTO `goodslist` VALUES ('7', '7', '美国无籽红提2.25kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('8', '8', '新西兰加力果4.5kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('9', '9', '德庆皇帝柑1kg', '22.00', '352');
INSERT INTO `goodslist` VALUES ('10', '10', '南非柠檬6枚盒装', '27.80', '357');
INSERT INTO `goodslist` VALUES ('11', '11', '美国无籽黑提4.5kg', '278.00', '357');
INSERT INTO `goodslist` VALUES ('12', '12', '海南树上熟木瓜5.5kg', '72.80', '402');
INSERT INTO `goodslist` VALUES ('13', '13', '海南西洲蜜瓜4kg', '58.80', '388');
INSERT INTO `goodslist` VALUES ('14', '14', '新西兰红玫瑰苹果4.5kg', '168.00', '498');
INSERT INTO `goodslist` VALUES ('15', '15', '一级台湾释迦4.5kg', '398.00', '369');
INSERT INTO `goodslist` VALUES ('16', '16', '广东精选杨桃6个装', '25.80', '355');
INSERT INTO `goodslist` VALUES ('17', '17', '依谷精品高山娃娃菜450g', '13.50', '343');
INSERT INTO `goodslist` VALUES ('18', '18', '依谷调味盒(条装蒜头)', '5.50', '335');
INSERT INTO `goodslist` VALUES ('19', '19', '依谷生态白玉菇150g', '7.80', '337');
INSERT INTO `goodslist` VALUES ('20', '20', '依谷精选金针菇200g', '8.60', '338');
INSERT INTO `goodslist` VALUES ('21', '21', '依谷精选芦蒿100g', '7.90', '337');
INSERT INTO `goodslist` VALUES ('22', '22', '依谷精选金银甜玉米550g', '16.90', '346');
INSERT INTO `goodslist` VALUES ('23', '23', '依谷精选西葫芦瓜400g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('24', '24', '依谷精选海鲜菇150g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('25', '25', '依谷精选基地番茄400g', '8.90', '338');
INSERT INTO `goodslist` VALUES ('26', '26', '依谷精选净板栗肉200g', '13.60', '343');
INSERT INTO `goodslist` VALUES ('27', '27', '依谷精品日本小青瓜300g', '11.40', '341');
INSERT INTO `goodslist` VALUES ('28', '28', '依谷精品紫甘蓝500g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('29', '29', '依谷精品吉祥三宝甜椒450g', '16.60', '346');
INSERT INTO `goodslist` VALUES ('30', '30', '依谷生态基地紫茄500g', '10.80', '340');
INSERT INTO `goodslist` VALUES ('31', '1', '美国进口红提子4kg', '163.00', '493');
INSERT INTO `goodslist` VALUES ('32', '2', '山东红富士苹果8#15kg', '256.00', '355');
INSERT INTO `goodslist` VALUES ('33', '3', '河北蜜梨12kg', '108.00', '438');
INSERT INTO `goodslist` VALUES ('34', '4', '海南椰子(单个)约900g', '12.80', '342');
INSERT INTO `goodslist` VALUES ('35', '5', '越南火龙果礼箱3.3kg', '54.80', '384');
INSERT INTO `goodslist` VALUES ('36', '6', '新疆库尔勒香梨6.5kg', '116.00', '446');
INSERT INTO `goodslist` VALUES ('37', '7', '美国无籽红提2.25kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('38', '8', '新西兰加力果4.5kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('39', '9', '德庆皇帝柑1kg', '22.00', '352');
INSERT INTO `goodslist` VALUES ('40', '10', '南非柠檬6枚盒装', '27.80', '357');
INSERT INTO `goodslist` VALUES ('41', '11', '美国无籽黑提4.5kg', '278.00', '357');
INSERT INTO `goodslist` VALUES ('42', '12', '海南树上熟木瓜5.5kg', '72.80', '402');
INSERT INTO `goodslist` VALUES ('43', '13', '海南西洲蜜瓜4kg', '58.80', '388');
INSERT INTO `goodslist` VALUES ('44', '14', '新西兰红玫瑰苹果4.5kg', '168.00', '498');
INSERT INTO `goodslist` VALUES ('45', '15', '一级台湾释迦4.5kg', '398.00', '369');
INSERT INTO `goodslist` VALUES ('46', '16', '广东精选杨桃6个装', '25.80', '355');
INSERT INTO `goodslist` VALUES ('47', '17', '依谷精品高山娃娃菜450g', '13.50', '343');
INSERT INTO `goodslist` VALUES ('48', '18', '依谷调味盒(条装蒜头)', '5.50', '335');
INSERT INTO `goodslist` VALUES ('49', '19', '依谷生态白玉菇150g', '7.80', '337');
INSERT INTO `goodslist` VALUES ('50', '20', '依谷精选金针菇200g', '8.60', '338');
INSERT INTO `goodslist` VALUES ('51', '21', '依谷精选芦蒿100g', '7.90', '337');
INSERT INTO `goodslist` VALUES ('52', '22', '依谷精选金银甜玉米550g', '16.90', '346');
INSERT INTO `goodslist` VALUES ('53', '23', '依谷精选西葫芦瓜400g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('54', '24', '依谷精选海鲜菇150g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('55', '25', '依谷精选基地番茄400g', '8.90', '338');
INSERT INTO `goodslist` VALUES ('56', '26', '依谷精选净板栗肉200g', '13.60', '343');
INSERT INTO `goodslist` VALUES ('57', '27', '依谷精品日本小青瓜300g', '11.40', '341');
INSERT INTO `goodslist` VALUES ('58', '28', '依谷精品紫甘蓝500g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('59', '29', '依谷精品吉祥三宝甜椒450g', '16.60', '346');
INSERT INTO `goodslist` VALUES ('60', '30', '依谷生态基地紫茄500g', '10.80', '340');
INSERT INTO `goodslist` VALUES ('61', '1', '美国进口红提子4kg', '163.00', '493');
INSERT INTO `goodslist` VALUES ('62', '2', '山东红富士苹果8#15kg', '256.00', '355');
INSERT INTO `goodslist` VALUES ('63', '3', '河北蜜梨12kg', '108.00', '438');
INSERT INTO `goodslist` VALUES ('64', '4', '海南椰子(单个)约900g', '12.80', '342');
INSERT INTO `goodslist` VALUES ('65', '5', '越南火龙果礼箱3.3kg', '54.80', '384');
INSERT INTO `goodslist` VALUES ('66', '6', '新疆库尔勒香梨6.5kg', '116.00', '446');
INSERT INTO `goodslist` VALUES ('67', '7', '美国无籽红提2.25kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('68', '8', '新西兰加力果4.5kg', '128.00', '458');
INSERT INTO `goodslist` VALUES ('69', '9', '德庆皇帝柑1kg', '22.00', '352');
INSERT INTO `goodslist` VALUES ('70', '10', '南非柠檬6枚盒装', '27.80', '357');
INSERT INTO `goodslist` VALUES ('71', '11', '美国无籽黑提4.5kg', '278.00', '357');
INSERT INTO `goodslist` VALUES ('72', '12', '海南树上熟木瓜5.5kg', '72.80', '402');
INSERT INTO `goodslist` VALUES ('73', '13', '海南西洲蜜瓜4kg', '58.80', '388');
INSERT INTO `goodslist` VALUES ('74', '14', '新西兰红玫瑰苹果4.5kg', '168.00', '498');
INSERT INTO `goodslist` VALUES ('75', '15', '一级台湾释迦4.5kg', '398.00', '369');
INSERT INTO `goodslist` VALUES ('76', '16', '广东精选杨桃6个装', '25.80', '355');
INSERT INTO `goodslist` VALUES ('77', '17', '依谷精品高山娃娃菜450g', '13.50', '343');
INSERT INTO `goodslist` VALUES ('78', '18', '依谷调味盒(条装蒜头)', '5.50', '335');
INSERT INTO `goodslist` VALUES ('79', '19', '依谷生态白玉菇150g', '7.80', '337');
INSERT INTO `goodslist` VALUES ('80', '20', '依谷精选金针菇200g', '8.60', '338');
INSERT INTO `goodslist` VALUES ('81', '21', '依谷精选芦蒿100g', '7.90', '337');
INSERT INTO `goodslist` VALUES ('82', '22', '依谷精选金银甜玉米550g', '16.90', '346');
INSERT INTO `goodslist` VALUES ('83', '23', '依谷精选西葫芦瓜400g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('84', '24', '依谷精选海鲜菇150g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('85', '25', '依谷精选基地番茄400g', '8.90', '338');
INSERT INTO `goodslist` VALUES ('86', '26', '依谷精选净板栗肉200g', '13.60', '343');
INSERT INTO `goodslist` VALUES ('87', '27', '依谷精品日本小青瓜300g', '11.40', '341');
INSERT INTO `goodslist` VALUES ('88', '28', '依谷精品紫甘蓝500g', '9.90', '339');
INSERT INTO `goodslist` VALUES ('89', '29', '依谷精品吉祥三宝甜椒450g', '16.60', '346');
INSERT INTO `goodslist` VALUES ('90', '30', '依谷生态基地紫茄500g', '10.80', '340');
SET FOREIGN_KEY_CHECKS=1;
