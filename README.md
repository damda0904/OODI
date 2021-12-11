해, 커리어 출품작
================
OODIZ: 강경지(디자인), 안홍기(기획, 마케팅), 이지수(백엔드), 임채원(프론트엔드)



소개
------------
우디는 공실률이 높은 운동 수업 매장의 해피 타임(오전 9시~오후 6시)을 활용해 소비자들에게 저렴한 가격의 운동 클래스를 연결해주는 운동/스포츠 예약 플랫폼 서비스 입니다.
![기술 시연](https://user-images.githubusercontent.com/67117391/145670068-b4a25c05-b9a9-4472-ab0c-580027c5513e.gif)

APK
--------------
React, React native을 사용하여 웹뷰 어플리케이션으로 개발되었습니다.

Server
---------------
1. NodeJS로 개발된 API 서버입니다.
2. 데이터베이스는 MariaDB 및 Sequelize를 사용합니다.
3. URL 주소는 ./router에 정리되어 있습니다.
4. ./controller에서 비즈니스 로직을 처리합니다.
5. ./data에서 데이터베이스 CRUD를 처리합니다.
6. ./db/scema 안에 모든 스키마가 정의되어 있습니다.

사용 라이브러리 목록
> - express : node JS 개발 프레임워크
> - express-validator : body validation
> - JsonWebToken : 토큰 생성
> - cors
> - helmet
> - mariadb
> - sequelize : MySQL ORM
> - geolib : 위,경도 기반 거리 계산
> - node-geocoder : 주소를 위, 경도로 변환
> - socket.io : 알림 

