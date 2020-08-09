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

select `Gia`,`LoaiP` 
from `khachSan` as ks ,
 `phong`as p
where p.`MAKS`=ks.`MAKS`
and `TenKS`=`Melia`;
    
-- Liet ke tat ca cac khach dang o khach san Melia

-- liet ke tat ca cac phong tai khach san Melia va (ten khach hang dang o phong do neu phong do co nguoi

-- liet ke cac phong chua co nguoi o tai khach san Melia tu truoc den nay 
 
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
    `price` = `price` *(5/100)
where
    `LoaiP` = 'phong don'

