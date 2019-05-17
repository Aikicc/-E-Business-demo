/*
Navicat MySQL Data Transfer

Source Server         : username
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : vancl

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-17 15:23:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for search
-- ----------------------------
DROP TABLE IF EXISTS `search`;
CREATE TABLE `search` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `parse` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of search
-- ----------------------------
INSERT INTO `search` VALUES ('1', '6384554-1j201904221138419901.jpg', '凡客男士工装袋沙滩裤 牛仔蓝', '56');
INSERT INTO `search` VALUES ('2', '6384555-1j201904221138422557.jpg', '凡客男士渐变印花沙滩裤 几何渐变黑/', '57');
INSERT INTO `search` VALUES ('3', '6384556-1j201904221138369900.jpg', '凡客男士工装袋沙滩裤 珊瑚红', '45');
INSERT INTO `search` VALUES ('4', '6384557-1j201904021536256769.jpg', '凡客男士魔术印花沙滩裤 深灰渐变', '80');
INSERT INTO `search` VALUES ('5', '6384560-1j201904021602504529.jpg', '凡客男士魔术印花沙滩裤 蓝色渐变', '135');
INSERT INTO `search` VALUES ('6', '6385115-1j201903051056476895.jpg', '轻弹反光运动短裤 男款 黑色', '201');
INSERT INTO `search` VALUES ('7', '6386371-1j201905150943426427.jpg', '男式T恤88111015 黑色', '150');
INSERT INTO `search` VALUES ('8', '6386399-1j201905150944378624.jpg', '男式T恤88111015 粉红', '280');
INSERT INTO `search` VALUES ('9', '6386407-1j201905150944428781.jpg', '男式T恤88111015 白色', '45');
INSERT INTO `search` VALUES ('10', '6386401-1j201905150944378468.jpg', '男式T恤85114363 绿色', '278');
INSERT INTO `search` VALUES ('11', '6386400-1j201905150944375030.jpg', '男式T恤85114363 湖蓝', '345');
INSERT INTO `search` VALUES ('12', '6386402-1j201905150944426906.jpg', '男士牛仔裤88253654M 蓝色', '234');
INSERT INTO `search` VALUES ('13', '6386406-1j201905150944426906.jpg', '男士牛仔裤88253654M 黑色', '123');
INSERT INTO `search` VALUES ('14', '6386405-1j201905150944428469.jpg', '男士时尚休闲裤87152720 紫色', '554');
INSERT INTO `search` VALUES ('15', '6386404-1j201905150944425188.jpg', '男士时尚休闲裤87152720 卡其', '554');
INSERT INTO `search` VALUES ('16', '6386229-1j201905140934408727.jpg', '布莱希尔顿百搭皮鞋SD9026 白色', '598');
INSERT INTO `search` VALUES ('17', '6386227-1j201905140934463103.jpg', '布莱希尔顿百搭皮鞋SD9026 黑色', '456');
INSERT INTO `search` VALUES ('18', '6386212-1j201905131527048025.jpg', '布莱希尔顿板鞋 皮鞋ZL9007 黑白', '598');
INSERT INTO `search` VALUES ('19', '6386211-1j201905131527101150.jpg', '布莱希尔顿板鞋 皮鞋ZL9007 白黑', '598');
INSERT INTO `search` VALUES ('20', '6386227-1j201905140934463103.jpg', '布莱希尔顿板鞋 皮鞋85726 米白色', '598');

-- ----------------------------
-- Table structure for sx
-- ----------------------------
DROP TABLE IF EXISTS `sx`;
CREATE TABLE `sx` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of sx
-- ----------------------------
INSERT INTO `sx` VALUES ('1', 'img/sx1.jpg');
INSERT INTO `sx` VALUES ('2', 'img/sx2.jpg');
INSERT INTO `sx` VALUES ('3', 'img/sx4.jpg');
INSERT INTO `sx` VALUES ('4', 'img/sx53jpg');
INSERT INTO `sx` VALUES ('5', 'img/1.jpg');
INSERT INTO `sx` VALUES ('6', 'img/4.jpg');
INSERT INTO `sx` VALUES ('7', 'img/3.jpg');
INSERT INTO `sx` VALUES ('8', 'img/4.jpg');
INSERT INTO `sx` VALUES ('9', 'img/sx1.jpg');
INSERT INTO `sx` VALUES ('10', 'img/sx53jpg');

-- ----------------------------
-- Table structure for tejia
-- ----------------------------
DROP TABLE IF EXISTS `tejia`;
CREATE TABLE `tejia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `yuajia` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `dazhe` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `chongzi` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of tejia
-- ----------------------------
INSERT INTO `tejia` VALUES ('1', 'img/y1.jpg', '白色 阿法萨法', '98', '12', '45');
INSERT INTO `tejia` VALUES ('2', 'img/y2.jpg', '黑色 日期若群', '68', '45', '19');
INSERT INTO `tejia` VALUES ('3', 'img/y3.jpg', '绿色 发发起人', '45', '43', '22');
INSERT INTO `tejia` VALUES ('4', 'img/y4.jpg', '紫色 人气人', '23', '33', '22');
INSERT INTO `tejia` VALUES ('6', 'img/y1.jpg', '紫色 人气人', '23', '33', '22');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `tel` bigint(50) DEFAULT NULL,
  `psw` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13319451387', '123456');
INSERT INTO `user` VALUES ('2', '13398765432', '');
INSERT INTO `user` VALUES ('20', '123', '122');
INSERT INTO `user` VALUES ('21', '13314599787', '11');
INSERT INTO `user` VALUES ('22', '13319451378', '123456');
INSERT INTO `user` VALUES ('23', '13345697823', '1234');
INSERT INTO `user` VALUES ('24', '13319451388', '123');
INSERT INTO `user` VALUES ('25', '13319451877', '123');
SET FOREIGN_KEY_CHECKS=1;
