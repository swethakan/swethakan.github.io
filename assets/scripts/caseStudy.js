import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'


const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const dotsNode = emblaNode.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode,
  onNavButtonClick
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

// window.addEventListener('scroll', () => {
//     const header = document.getElementById('case-nav');
//     // Adjust 100 for the scroll distance needed before it gets the stuck class
//     if (window.scrollY > 400) {
//         header.classList.add('stuck');
//     } else {
//         header.classList.remove('stuck');
//     }
// });