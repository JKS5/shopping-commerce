
# CAVILL shoppy
포트폴리오를 위한 쇼핑 사이트입니다. 
A shopping site for your portfolio. 

## Description
CAVILL은 다양한 카테고리의 제품을 한데 모은 사용자 친화적인 온라인 쇼핑 플랫폼입니다.
남녀 패션 아이템,악세사리,신발 등 트렌디한 제품을 찾고 있다면 바로 확인할 수 있는 경험을 제공합니다.
세련되고 직관적인 인터페이스를 갖춘 CAVILL는 사용자의 온라인 쇼핑 방식을 혁신하는 것을 목표로 합니다.

-------
With a sleek and intuitive interface, CAVILL aims to revolutionize the way you shop online. 
CAVILL is a user-friendly online shopping platform that brings together products from various categories. 
Whether you're looking for trendy fashion items for men and women, accessories, shoes, or anything else, you'll find it right here.

## Features

상품 상세페이지
쇼핑카트 구현(알람)
카테고리별 상품 분류
firebase를 통한 실시간 백엔드 관리
비로그인사용자, 로그인 사용자, Admin 운영자가 접근할 수 있는 부분 분류

------
Product detail pages
Categorizing products by category
Shopping cart implementation (alarms)
Real-time backend management via firebase
Partial categorization accessible to non-logged-in users, logged-in users, and admin operators.

## Tech Stack
Front-end: React.js, Tailwind

Back-end: firebase, cloudinary

Database: firebase

Deployment: Heroku

## Usage
1. non-login can only eyeshop general shop
2. Cart is available when logged in to Google
3. If you want to use Admin, contact us, and if you register the uid received from Google API to firebase, you can even use the product registration function.
-------
1. 비로그인시 일반적인 Shop만 eyeshopping 가능
2. 구글 로그인시 Cart 사용 가능
3. Admin 사용을 원한다면 연락, Google API에서 전달받은 uid를 firebase에 등록하여 등록된 User의 경우 상품 등록기능까지 사용가능

