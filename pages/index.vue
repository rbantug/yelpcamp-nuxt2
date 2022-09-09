<template>
  <div>
    <LandingPage />
  </div>
</template>

<script>
import CommentPage from "../components/Layout/CommentPage.vue";
import LandingPage from "@/components/Layout/LandingPage.vue"
export default {
  name: "IndexPage",
  components: { 
    CommentPage, 
    LandingPage, },
  layout: 'NoMenuLayout'
}
</script>

<style>
:root {
  --primary-color: rgba(155, 155, 155, 1);
  --secondary-color: rgba(249, 246, 241, 1);
}

/* Available font weight:
Light 300
Light 300 Italic
Regular 400
Regular 400 Italic
Medium 500
Medium 500 Italic
Bold 700
Bold 700 Italic
 */


/* breakpoint

> 640px  Tablet
> 1024px Desktop

> 1250px in Landing Page because of vertical image

*/

/* Font awesome icon

For the message bubble with 3 dots
<fa icon="far fa-comment-dots"></fa>

For the magnifying glass
<fa icon="fa-solid fa-magnifying-glass"></fa>


*/
</style>