import Lenis from '@studio-freight/lenis';

export function useLenis() {
  let lenis;

  const init = () => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 1,
    });

    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  };

  const destroy = () => {
    lenis.destroy();
  };

  return { init, destroy };
}
