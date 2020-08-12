-- --bai2--   
drop database if exists  `qlks`;
create database `qlks`;
use `qlks`;

drop table if exists `khachSan`;
create table `khachSan`(
MAKS nvarchar(100) primary key,
TenKS nvarchar(100),
Diachi nvarchar(100)
);

drop table if exists `phong`;
create table `phong`(
SoP nvarchar(100) primary key ,
MaKS nvarchar(100),
LoaiP nvarchar(100),
Gia integer,
foreign key (`MaKS`) references `khachSan`(`MaKS`)
);


drop table if exists `khach`;
create table `khach`(
MaK nvarchar(100) primary key,
HoTen nvarchar(100),
DiaChi nvarchar(100)

);


drop table if exists `datPhong`;
create table `datPhong` (
MaKS nvarchar(100),
MaK nvarchar(100),
SoP nvarchar(100),
NgayNhan datetime,
NgayTra datetime,
foreign key (`MaKS`) references `khachSan`(`MaKS`),
foreign key (`MaK`) references `khach`(`MaK`),
foreign key (`SoP`) references `phong`(`SoP`)
);


-- Dua ra danh sach Gia va LoaiP cua tat ca cac phong trong khach san Melia

select P.`Gia`,P.`LoaiP` 
from `khachSan` as K ,
 `phong`as P
where P.`MAKS`=K.`MAKS`
and K.`TenKS`=`Melia`;
 
-- tong so phong cua moi khach san tai LonDon

select `Diachi`,  count(`SoP`)
from `khachsan` as ks,
     `phong` as p 
 where
 ks.`MAKS` = p.`MaKS`
 and ks.`Diachi`='LonDon' ;     

-- Tang don gia cua cac loai phong don len 5%
update `room` 
set
    `price` = `price` *1.05
where
    `LoaiP` = 'phong don'



