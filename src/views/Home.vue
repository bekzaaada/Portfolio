<template>
  <div class="container">
      <h1>Hi, my name is Bekzada</h1>
      <h3>Welcome to my portfolio website</h3>

  </div>
  
</template>

<script>
  export default {
    name: "Home",
  }
</script>

<style>

.container{
    min-height: 100vh;
    width: 100%;
    display: flexbox;
    align-items: center;
    justify-content: center;
    background-image: url(https://www.1zoom.ru/big2/2/162141-tushkanchik.jpg);
}
h1{
  margin-top: 10rem;
  font-size: 4rem;
  color: black;
  background-color: white;
}
 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>