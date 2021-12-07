<template>
  <div class="skills">
    <div class="hobbies">
      <h1>Hobbies & Interests</h1>
      <h4>- Writing Poetry </h4>
      <h4>- Reading books </h4>
      <h4>-Creating content for Instagram</h4>
      <h4>-Volleyball</h4>
      <h4>- Photographer </h4>
    </div>
    <div class="skill">
      <h1>Skills</h1>
      <h4>-Frontend developer (1 year)</h4>
      <h4>-Java developer (2 years)</h4>
      <h4>- Content Creation</h4>
      <h4>- Social Networking</h4>
      <h4>-Strong Communication Skills</h4>
      <h4>IELTS 6.5</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skills",
  }
</script>

<style>
.skills{
  top: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
}
.skills .hobbies{
  margin-top: 0;
  margin: 1.5rem;

}
.skills .skill{
  margin-top: 0;
  margin: 1.5rem;

}
.skills .hobbies h4{
  color: rgb(0, 0, 179);
  background-color: rgb(230, 230, 255);
}
.skills .skill h4{
  color: rgb(0, 0, 179);
  background-color: rgb(230, 230, 255);
}
</style>