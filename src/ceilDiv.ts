/**
 * Gives value ≥ x/y.
 * @param x dividend
 * @param y divisor
 */
function ceilDiv(x: bigint, y: bigint): bigint {
  if(y<0n) { x=-x; y=-y; }
  return x<0 ? (x/y) : ((x-1n)/y)+1n;
}
export default ceilDiv;
