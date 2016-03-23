import C from 'lib/constants';
const fireRef = new Firebase(C.FIREBASE);
const palettesNode = fireRef.child('palettes');


export const SAVE_PALETTE =  "SAVE_PALETTE";
export function savePalette(title, creator, colorArr) {
  //assume all fields have been validated

  pallettesNode.push({
    title: title,
    creator: creator,
    palettes: colorArr
  });
}


export const FETCH_PALETTES = "FETCH_PALETTES";
export function fetchPalettes() {
  let palettesArr = [];
  palettesNode.on("child_added", function(dataSnapshot) {
     palettesArr.push(dataSnapshot.val());
  });
  return {
    type: FETCH_PALETTES,
    payload: palettesArr
  };
}
