const smartGarbage = function (trash, bins) {
    const keys = Object.keys(bins);
    for(let i = 0; i < keys.length; i++){
      if(keys[i] === 'waste' && trash === 'waste'){
        bins.waste += 1;
        return bins;
      } else if(keys[i] === 'recycling' && trash === 'recycling') {
        bins.recycling += 1;
        return bins;
      } else if(keys[i] === 'compost' && trash === 'compost') {
        bins.compost += 1;
        return bins;
      }
    }
    return bins;
}

let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}