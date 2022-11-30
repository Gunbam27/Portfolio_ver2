<template>
    <div className="wrap_skill">
        <h2>Skill</h2>
        <ul>
            <li><i class="fa-brands fa-html5"></i></li>
            <li><i class="fa-brands fa-css3-alt"></i></li>
            <li><i class="fa-brands fa-square-js"></i></li>
            <li><i class="fa-brands fa-sass"></i></li>
            <li><i class="fa-brands fa-vuejs"></i></li>
            <li><i class="fa-brands fa-figma"></i></li>
        </ul>
        <span><i class="fa-solid fa-check"></i> 관심사 & 목표</span>
        <p>최근 스크롤이벤트에 반응하는 애니메이션에 관심이 많습니다. YSL페이지를
          제작하면서 스크롤 기능에 대하여 공부를 많이했고, 구현을 위해 Scroll Trigger
          플러그인을 사용하여 제작하였습니다. 이 다음으로는 Scroll Trigger에 SVG와 Canvas를 결합하여 매력적인 페이지를
          구현하는것이 목표입니다.
        </p>
        <span><i class="fa-solid fa-check"></i> Vue.js</span>
        <p>
          Vue.js 프레임워크를 배우고 있습니다. 뷰-라우터,컴포넌트,V-if,V-model,Props에
          대해서 이해하고 사용할 수 있습니다. Vuex를 사용한 상태관리에 대해서는 아직
          공부중에 있습니다.
        </p>
        <span><i class="fa-solid fa-check"></i> JavaScript</span>
        <p>
          ES6 문법을 이해하고 사용하고 있습니다.화살표함수(Arrow function),스프레드
          연산자(Spread Operator),템플릿 리터럴(Template Literal), Map 메서드, 삼항연산자 등을
          사용하고 있습니다. 공부하고, 오래된 습관을 바꾸고, 기록하려고
          노력하고있습니다.</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style>
    .wrap_skill {

    }
    .wrap_skill>ul{display: flex;justify-content: center; font-size:2rem;gap: 20px;margin: auto;padding: 20px 0;}
    .wrap_skill>ul>li:nth-child(1){color:#df4a17}
    .wrap_skill>ul>li:nth-child(2){color:#0068ba;}
    .wrap_skill>ul>li:nth-child(3){color:#df9e28;}
    .wrap_skill>ul>li:nth-child(4){color:#c66394;}
    .wrap_skill>ul>li:nth-child(5){color:#3fb27f;}
    .wrap_skill>ul>li:nth-child(6){color:#000;}
    .wrap_skill > span{font-weight: bold;}
    .wrap_skill > p{padding: 15px;font-size: 16px;}
</style>