setcpm(130 / 4)

const canon = chord("<C G Am Em F C F G>")

CHORD: canon.voicing().fast(2)
  .sound("sawtooth").room(0.2).gain(0.2)

BASS: n("0*8").set(canon)
  .mode("root:c2").voicing()
  .fast(2).s("sawtooth").dec(0.2).gain(0.7)

DRUMS: stack(
  s("bd*4").gain(0.4),
  s("<sd ->*4").gain(0.4),
  s("hh*8").gain(0.2),
).bank("tr909")._scope()

MELODY: n(irand(10).seg(16))
  .scale("C:major").sound("square")
  .degradeBy(0.1).gain(0.5)
  ._pianoroll()

