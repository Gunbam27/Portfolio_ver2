<template>
<div className="wrap_work">
    <h2>Work</h2>
    <ul>
      <li>
        <img
          src="./../assets/img/한국영미문학페미니즘학회.png"
          alt="한국영미문학페미니즘학회 사이트"
        />
        <div>
          <a href="https://www.fsel.org/">한국영미문학페미니즘학회</a>
          <p>22.10.25-11.02</p>
        </div>
      </li>
      <li>
        <img src="./../assets/img/국어교육학회.png" alt="국어교육학회 사이트" />
      <div>
        <a href="https://www.fsel.org/">국어교육학회</a>
          <p>22.10.06-22.10.21</p></div>
      </li>
      <li>
        <img
          src="./../assets/img/한국보험교육연구원.png"
          alt="한국보험교육연구원 사이트"
        />
        <div>
          <a href="https://kiiedu.re.kr/">한국보험교육연구원</a>
          <p>22.08.22-22.09.06</p>
        </div>
      </li>
      <li>
        <img
          src="./../assets/img/한국목재공학회.png"
          alt="한국목재공학회 사이트"
        /><div><a href="http://kswst.or.kr/">한국목재공학회</a><p>22.08.25-09.21</p></div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style>

.wrap_work ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:2.5rem;
  padding: 0;
}
.wrap_work ul li {
  display: flex;
  flex-direction: column;

  /* margin: 20px;
  text-align: center; */
}
.wrap_work > ul > li > div > a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding-top: 10px;
  font-size: 1rem;
}
.wrap_work ul li img {
  width: 300px;
  height: 250px;
  border-radius: 25px;
}
</style>