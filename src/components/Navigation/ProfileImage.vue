<template>
  <img :src="imageLink" alt="user profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://e7.pngegg.com/pngimages/739/902/png-clipart-super-mario-illustration-super-mario-bros-nintendo-badge-arcade-super-mario-rpg-luigi-super-mario-bros-nintendo.png'
    }
  }
}
</script>
