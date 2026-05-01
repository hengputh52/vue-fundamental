<template>
  <div class="grid">
    <aside class="sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <main class="main">
      <slot name="main"></slot>
    </main>
      <footer class="footer">
    <slot name="footer"></slot> 
  </footer>
  </div>

</template>

<style>
.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
.sidebar {
  border: 1px solid red;
}
.main {
    border: 1px solid green;
}
.footer {
    border: 1px solid blue;
}
</style>
