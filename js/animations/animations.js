if (screen.width > 425) {
    gsap.registerPlugin(ScrollTrigger);

    let animaciones = () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ourMenu",
          start: "top center",
          end: "top center",
          pin: true,
          scrub: 3,
        },
      });

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bookTable",
          start: "top center",
          end: "top center",
          pin: true,
          scrub: 3,
        },
      });

      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutUs",
          start: "top center",
          end: "top center",
          pin: true,
          scrub: 2,
        },
      });

      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact",
          start: "top center",
          end: "top center",
          pin: true,
          scrub: 2,
        },
      });

      TweenMax.from(".main__nav, .main__header", 2, {
        delay: 0.4,
        opacity: 0,
        ease: Expo.easeInOut,
      });

      tl.addLabel("start")
        .from(".ourMenu", {
          x: 1000,
          delay: 0.4,
          duration: 20,
        })
        .addLabel("spin")
        .to(".foodImg", {
          rotation: 180,
          delay: 0.2,
          duration: 5,
        });

      tl2.addLabel("start").from(".bookTable h2, .bookTable .btn", {
        delay: 0.5,
        duration: 5,
        opacity: 0,
        ease: Expo.easeInOut,
      });

      tl3
        .addLabel("spin")
        .from(".aboutUs h2", {
          delay: 0.5,
          duration: 200,
          opacity: 0,
        })
        .addLabel("spin")
        .from("figure", {
          x: -1500,
          delay: 0.4,
          duration: 20,
        });

      tl4.addLabel("spin").from(".contact", {
        delay: 0.5,
        duration: 200,
        opacity: 0,
      });
    };

    animaciones();
}