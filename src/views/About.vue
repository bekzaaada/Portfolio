<template>
<div class="about">
  <div class="imageblock">
    <img src="https://sun9-86.userapi.com/impf/jk5YGRSFpE9-CmftVRWgJwRrC9F2eaYxWwK7mA/KJvr3rFMfus.jpg?size=640x800&quality=96&sign=68cd9cca9e4a7bd79470d9493f76e43e&type=album" alt="">
    <h2>BEKZADA USHTAY</h2>
  </div>
  <div class="description">
    <h3>Career Goals</h3>
    <p>Seeking a position that allows me to immerse myself in the IT-sphere while pursing further education in computer science</p>
    <br>
    <h3>Employment History</h3>
    <p>Unfortunately, I have no experience working in a company but I am improving my coding skills by participating to different courses. Nowadays I am planning to start from different internships to get experience and be a more qualified specialist.</p>
    <br>
    <h3>Academic History</h3>
    <p>Suleyman Demirel university in Kazakhstan</p>
    <p>Bachelor of Science in Information technologies (2020-2024)</p>
  </div>

  </div>
</template>

<script>
  export default {
    name: "About",
  }
</script>
<style>
.about{
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}
.about .imageblock h2{
  color: rgb(230, 230, 255);
  font-size: 3rem;
}
.about .description h3{
  color: black;
  font-size: 2rem;
  background-color: rgb(153, 153, 255);

}
.about .description p{
  color: black;
  font-size: 1.8rem;
  background-color: white;

}
.about .imageblock img{
  width: 400px;
  height: 450px;
  display: inline-block;
}

</style>