<template>
  <div className="wrap_home">
    <img src="./../assets/img/profile.jpg" alt="신예진"/>
    <h1>안녕하세요👋 모션을 좋아하고 잘하고싶은 웹퍼블리셔 신예진입니다✨</h1>
    <p>구현하고자 하는 기능이 있다면, 몇일이 걸려서라도 만들어냅니다.</p>
    <p>그 과정에서 모든 코드를 다 이해할 순 없어도, 내 것으로 만드려고 노력하고있습니다.</p>
    <p>저는 제 일을 좋아하고, 잘 하고 싶습니다. 흰 도화지 같은 화면에 거침없이 채워나갈 때 즐거움을 느껴요</p> 
    <p>성장을 즐거워하고, 솟아오르는 영감에 대해 같이 얘기할 사람들을 찾고있습니다.</p>
  </div>
</template>

<script>

export default {};
</script>

<style>
.wrap_home{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.wrap_home > img{width:190px;border-radius: 50%;margin: 1.8rem 0;}
.wrap_home > h1{font-size: 1.2rem;margin-bottom: 1.3rem;}
.wrap_home > p{margin-bottom: 10px;}
</style>