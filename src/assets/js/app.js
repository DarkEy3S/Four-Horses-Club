import * as flsWebpFunction from "./modules/webfunctions.js"

import * as flsError from "./modules/Error.js"
import * as flsMarquee from "./modules/marquee.js"

import * as  flsPart from "./modules/part.js"

import * as  flsSliderPart from "./modules/sliderPart.js"
import * as  flsCarouselParticipants from "./modules/carouselParticipants.js"



flsError.funError()
flsMarquee.marquee()
flsWebpFunction.isWebp()

flsPart.part()


flsSliderPart.sliderPart()
flsCarouselParticipants.carousel()