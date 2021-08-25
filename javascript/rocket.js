var tl = new TimelineMax({});
tl.addLabel('start', 0).add(TweenMax.from(".takeoff", 0.5, {
  scaleY: 0,
  y: -200,
  ease: Expo.easeInOut,
  delay: 3
}))
.add(TweenMax.to("#rocket", 1, {
  className: "+=shake",
  delay: -1
}))
.add(TweenMax.to(".smoke", 2, {
  y: -50,
  delay: 1
}))
.add(TweenMax.to("#rocket", 1, {
  className: "-=shake"
}))
.add(TweenMax.to("#rocket", 1, {
  y: -800,
  delay: -1
}))
// .add(TweenMax.to(".fire", 1, {
//   display :"none"
// }))
// .add(TweenMax.to(".takeoff", 1, {
//   y: -300,
//   delay: -1
// }))
// .add(TweenMax.to(".takeoff", 1, {
//   display : "none"
// }))
// .add(TweenMax.to(".smoke-bubble", 1, {
//   display : "none"
// }))
// .add(TweenMax.to(".smoke", 1, {
//   display : "none"
// }))




