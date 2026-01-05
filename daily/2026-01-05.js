setcpm(160 / 4)

DRUMS: stack(
  s("bd:1").struct("<[1 0 0 1] [[0 1 0 1] 0 0 0]>").room(.1),
  s("sd:4").struct("0 0 1 0").bank("xr10").room(.2),
  s("hh:4").struct("<1*8 [1*4 1*8]>"),
)._scope()

// 参考: https://www.youtube.com/watch?v=OkwEhzwZwLE
const prog = chord(`
  Gb^9@4  ~  Gb^9  ~
  F7#9@5  ~@2  F7#9@2  Bb-9@6  ~
  Ab-add9@5  ~@2  Ab-add9@2
  Gb^9@4  ~  Gb^9  ~
  F7#9@5  ~@2
  Am9@2  Bb-9@3  Am9@3  Ab-add9@4  ~@2  Db13@4
`).slow(8)

CHORD: stack(
  prog.voicing()
    .s("supersaw").orbit(2)
    .lpf("<500 2200 900 3200>*2")
    .lpr(0.1).lpd(0.2).lpenv(10),

  prog.rootNotes(2)
    .s("sawtooth").orbit(2)
    .lpf("<500 2200 900 3200>*2")
    .lpr(0.1).lpd(0.2).lpenv(10),

  prog.rootNotes(2)
    .s("sine").orbit(2)
    .gain("<1 1.8 1.2 2>*2")
    .lpr(0.1).lpd(0.2).lpenv(10),
)._punchcard()

const melodyline = n(irand(12).seg(8)).scale("C#5:major")
  .degradeBy(0.3).clip(rand.seg(8).range(0.25, 2))

MELODY: stack(
  melodyline
    .s("supersaw").orbit(2)
    .lpenv(10).lpr(0.1).room(0.2)
    .gain(0.4),

  melodyline
    .s("sine").orbit(2)
    .lpenv(10).lpr(0.1).room(0.3)
    .gain(0.6)

)
  .pianoroll({ playhead: 0.1 })
