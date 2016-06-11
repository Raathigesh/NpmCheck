<template>
  <div class="demo-headline">
    <h1 class="demo-logo">
      <div class="logo"></div>
      Npm Name Check
      <small>Because your library deserves a cool name!</small>
    </h1>
  </div>
</template>

<style>
.demo-headline {
  padding: 50px 0 20px;
  text-align: center;
  }
.demo-logo {
  margin: 10px 0;
  font: 600 60px/70px "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -2px;
  }
.demo-logo .logo {
  width: 200px;
  height: 200px;
  margin: 0 auto 26px;
  overflow: hidden;
  text-indent: -9999em;
  background: url(../assets/logo.png) center 0 no-repeat;
  background-size: 200px 200px;
  }

.demo-logo small {
  display: block;
  padding-top: 5px;
  font-size: 22px;
  font-weight: 700;
  color: rgba(52, 73, 94, .3);
  letter-spacing: 0;
}
</style>