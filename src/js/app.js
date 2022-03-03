// alert("Asdasss")
import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    peek:100,
  }).mount()