// https://strudel.cc/#CnNldGNwbSgxMzAgLyA0KQoKY29uc3QgY2Fub24gPSBjaG9yZCgiPEMgRyBBbSBFbSBGIEMgRiBHPiIpCgpDSE9SRDogY2Fub24udm9pY2luZygpLmZhc3QoMikKICAuc291bmQoInNhd3Rvb3RoIikucm9vbSgwLjIpLmdhaW4oMC4yKQoKQkFTUzogbigiMCo4Iikuc2V0KGNhbm9uKQogIC5tb2RlKCJyb290OmMyIikudm9pY2luZygpCiAgLmZhc3QoMikucygic2F3dG9vdGgiKS5kZWMoMC4yKS5nYWluKDAuNykKCkRSVU1TOiBzdGFjaygKICBzKCJiZCo0IikuZ2FpbigwLjQpLAogIHMoIjxzZCAtPio0IikuZ2FpbigwLjQpLAogIHMoImhoKjgiKS5nYWluKDAuMiksCikuYmFuaygidHI5MDkiKS5fc2NvcGUoKQoKTUVMT0RZOiBuKGlyYW5kKDEwKS5zZWcoMTYpKQogIC5zY2FsZSgiQzptYWpvciIpLnNvdW5kKCJzcXVhcmUiKQogIC5kZWdyYWRlQnkoMC4xKS5nYWluKDAuNSkKICAuX3BpYW5vcm9sbCgp

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

