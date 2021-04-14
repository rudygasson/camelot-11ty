const spaltenfaktor = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 7.5,
  G: 10,
  H: 20
};

exports.skt = (talentwert, spalte) => {
  let faktor = spaltenfaktor[spalte];
  return Math.round(talentwert ** 1.2 * 0.8 * faktor);
}
