<template>
  <div className="wrap_projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://gunbam27.github.io/SAINT-LAURENT/"><img src="./../assets/img/YSL.png" alt ="YSL 포트폴리오"/>SAINT-LAURENT 개인사이트 제작</a>
        <div>
          <p>기간 : 2주</p>
          <p>작업내용 : 기획부터, 퍼블리싱, 스크립트까지 작성한 개인프로젝트 입니다.
            기획단계는 피그마를 사용하여 작성하였습니다. gsap의 Scroll Trigger 플러그인을 사용하여 구현하였습니다.
          </p>
        </div>
      </li>
      <li>
        <a href="https://gunbam27.github.io/BaskinRobbins/"><img src="./../assets/img/BaskinRobbins.png" alt ="베스킨라빈스 포트폴리오"/>BaskinRobbins 개인사이트 제작</a>
        <div>
          <p>기간 : 2주</p>
          <p>작업내용 : 미국 배스킨라빈스의 로고가 바뀌어서, 한국에도 로고가 바뀌었다고 가정하여 디자인 및 퍼블리싱한 사이트 입니다. 디자인과 퍼블리싱 참여도 100%이며 Figma를 이용하여 디자인 하였습니다. 디자인부터 퍼블리싱까지 제작에 13일 소요되었습니다.
          반응형 페이지로 제작되었으며 웹표준검사 통과하였습니다.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import pic1 from '@/assets/img/YSL.png'
import pic2 from '@/assets/img/BaskinRobbins.png'

export default {
  data() {
    return {
        pic1,pic2
    }
  }
}   
</script>

<style>
.wrap_projects ul li{
  display: flex;
  flex-direction: column;
}
.wrap_projects ul li a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color:black;
  text-align: center;
  font-weight: bold;
  margin-bottom:20px;
}
.wrap_projects img{width:200px;padding: 0 3rem;}
</style>

