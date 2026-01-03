// https://strudel.cc/#CiBzZXRjcG0oMTUwIC8gNCkKCkRSVU1TOiBzdGFjaygKICBzKCJiZCBiZCBbYmQgLSAtIGJkXSBbLSAtIGJkIC1dIiksCiAgcygiWy0gY2xhcF0qMiIpLAogIHMoImhoKjgiKSwKICBzKCJvaC8yIiksCikuYmFuaygidHI5MDkiKS5nYWluKDAuNykuX3B1bmNoY2FyZCgpCgpjb25zdCBwcm9nID0gY2hvcmQoIjxBbSBGIEMgRz4iKQoKQkFTUzogcHJvZy5zdHJ1Y3QoIjEqOCIpLm1vZGUoInJvb3Q6YzMiKQogIC52b2ljaW5nKCkKICAuZGVncmFkZUJ5KDAuMikucygic2luZSIpLmxwZigxODApLmdhaW4oMC42KQoKQ0hPUkQ6IHByb2cuc3RydWN0KCJbMCAxXSoyIikudm9pY2luZygpCiAgLnMoInNhd3Rvb3RoIikKICAubHBmKDE1MDApLnJvb20oMC4yNSkuZ2FpbigwLjU1KQoKTUVMT0RZOiBuKGlyYW5kKDYpLnNlZyg4KSkKICAuc2NhbGUoIkM6bWFqb3IiKS5zb3VuZCgic3VwZXJzYXciKQogIC5kZWdyYWRlQnkoMC4xKS5yb29tKDAuMTUpLmdhaW4oMC44KQogIC5fcGlhbm9yb2xsKCk%3D

setcpm(150 / 4)

DRUMS: stack(
  s("bd bd [bd - - bd] [- - bd -]"),
  s("[- clap]*2"),
  s("hh*8"),
  s("oh/2"),
).bank("tr909").gain(0.7)._punchcard()

const prog = chord("<Am F C G>")

BASS: prog.struct("1*8").mode("root:c3")
  .voicing()
  .degradeBy(0.2).s("sine").lpf(180).gain(0.6)

CHORD: prog.struct("[0 1]*2").voicing()
  .s("sawtooth")
  .lpf(1500).room(0.25).gain(0.55)

MELODY: n(irand(6).seg(8))
  .scale("C:major").sound("supersaw")
  .degradeBy(0.1).room(0.15).gain(0.8)
  ._pianoroll()

