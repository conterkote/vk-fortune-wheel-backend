export function findDegrees(prizesCount : number, prizeId : number) {
  const degreeOnOneSection = 360 / prizesCount;
  const sectionEndsAt = degreeOnOneSection * (prizeId + 1)
  const sectionStartsAt = sectionEndsAt - degreeOnOneSection;
  return {
    sectionStartsAt,
    sectionEndsAt
  }
}