<template>
<div class="contact">
            <div class="contact-items">
                <div class="contact-item">
                    <div class="contact-info">
                        <h1>Phone</h1>
                        <h2>+77076458293</h2>
                        <h2>+77076458293</h2>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-info">
                        <h1>Email</h1>
                        <h2>bekzada.abay.<br>2002@gmail.com</h2>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-info">
                        <h1>Address</h1>
                        <h2>Abay 17, Shymkent</h2>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
  export default {
    name: "Contacts"
  }
</script>

<style>
.contact{
    display: flex;
}
.contact-items{
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-item{
    width: 80%;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
    margin: 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 18px 0 #0000002c;
    background-color: rgb(153, 153, 255);
}

.contact-info h1{
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 5px;
}
.contact-info h2{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
}

</style>