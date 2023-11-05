const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "30% 50%",
    end: "70% 90%",
    scrub: true,
    markers: false,
  },
});

tl.to("#img2", {
  rotateX: "0deg",
});
tl.to("#img3", {
  rotateX: "0deg",
})

  .to(
    ".resume",
    {
      marginTop: "50vh",
      scale: "0.8",
    },
    "sa"
  )
  .to(
    ".img",
    {
      filter: "grayscale(1)",
    },
    "sa"
  )
  .to(
    ".text",
    {
      marginTop: "-100vh",
    },
    "sa"
  )
  .to(
    ".overlay",
    {
      opacity: 1,
    },
    "sa"
  );
