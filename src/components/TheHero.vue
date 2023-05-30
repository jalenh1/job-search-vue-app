<template>
  <main>
    <section class="flex h-screen flex-col bg-green-300 pb-20 pt-10">
      <div class="grid-col-12 grid">
        <div class="col-span-1 col-start-1 border border-blue-800">1 column</div>
        <div class="col-span-5 col-start-2 border border-blue-700">5 column</div>
        <div class="col-span-5 col-start-7 border border-blue-700">5 column</div>
        <div class="col-span-1 col-start-12 border border-blue-700">1 column</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>
