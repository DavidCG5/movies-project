<template>
    <div class="banner">
        <img src ="../assets/images/movieHomePage.jpg" alt=""/>
        <div class="text-container">
            <div class="text">
                <span class="mini-heading">
                    Todo
                </span>
                <h1>Lo que necesitas <span style="color: #9295ff">Saber</span> de películas</h1>
               
            </div>
        </div>
    </div>
</template>

<script>

export default {
 name: 'Banner',
}
</script>


<style lang="scss" scoped>
.banner {
  height: 400px;
  position: relative;
  @media (min-width: 750px) {
    height: 500px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
      padding: 0 16px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .mini-heading {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      color: #9295ff;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 22px;
      }
    }

    h1 {
      color: #fff;
      font-size: 64px;
      font-weight: 200;
      margin-bottom: 8px;

      @media (min-width: 750px) {
        font-size: 84px;
      }

      span {
        font-weight: 500;
      }
    }

    .button {
      font-size: 20px;
      align-self: flex-start;
    }
  }
}
</style>