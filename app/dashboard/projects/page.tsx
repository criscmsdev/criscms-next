import { TransitionUI } from '@/ui/headleUI/transition'
import { CategoryPreview0 } from '@/ui/tailwindCSS/CategoryPreview0'
import { FeatureSection } from '@/ui/tailwindCSS/featureSection'
import { HeroSection } from '@/ui/tailwindCSS/heroSection'
import { Fragment } from 'react'

export default function Page() {
  return (
    <Fragment>
      {/* <CategoryPreview0 /> */}
      <HeroSection />
      <TransitionUI />
      <FeatureSection />
    </Fragment>
  )
}
