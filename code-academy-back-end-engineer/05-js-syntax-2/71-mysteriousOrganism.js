// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (uniqueNumber, dnaArray) => {
  return {
    dna: dnaArray,
    specimenNum: uniqueNumber,
    mutate() {
      const randomSelection = Math.floor(Math.random() * (this.dna.length))
      const baseToChange = this.dna[randomSelection]
      replacementBase = returnRandBase()
      while (replacementBase === baseToChange) {
        replacementBase = returnRandBase()
      }
      this.dna[randomSelection] = replacementBase
      return this.dna
      //console.log(this.dna)
    },
    compareDNA(obj) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          count++
        }
      }
      return (count / this.dna.length) * 100
    },
    willLikelySurvive() {
      let count = 0
      for (const base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++
        }
      }
      if (((count / this.dna.length) * 100) >= 60) {
        return true
      } else {
        return false
      }
    },
    complementStrand() {
      complementDNA = []

      for (let base of this.dna) {
        // console.log(base)
        switch (base) {
          case 'A':
            complementDNA.push('T');
            continue;
          case 'T':
            complementDNA.push('A');
            continue;
          case 'C':
            complementDNA.push('G');
            continue;
          default:
            complementDNA.push('C');
        }
      }
      return complementDNA
    }
  }
}

// find the two most related instances of pAequor.
const mostRelatedOrganisms = (nestedArray) => {
  let percentageMatch = 0 // hold the percentage match

  // index for the two items that have highest match
  let indexA = 0;
  let indexB = 0;

  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray.length; j++) {
      if (j !== i) {
        if (nestedArray[i].compareDNA(nestedArray[j]) > percentageMatch) {
          percentageMatch = nestedArray[i].compareDNA(nestedArray[j]);
          indexA = i;
          indexB = j;
        }
      }
    }
  }
  console.log(`specimens ${indexA} and ${indexB} are the most related with ${percentageMatch} matching dna`)
  return (`specimens ${nestedArray[indexA]['dna']} and ${nestedArray[indexB]['dna']} are most related with ${percentageMatch}% matching dna`)
}


pAequorArray = []
for (let i = 0; i < 3; i++) {
  pAequorArray.push(pAequorFactory(i, mockUpStrand()))
}

let specimen1 = pAequorArray[0]
let specimen2 = pAequorArray[1]

console.log(specimen1)
console.log(specimen2)
// console.log(specimen1.mutate())
console.log(specimen1.compareDNA(specimen2), '% match')
console.log(specimen1.complementStrand())
console.log(specimen1.willLikelySurvive(), specimen2.willLikelySurvive())

console.log(mostRelatedOrganisms(pAequorArray))






























// // sort organisms by most related to least related
// const sortOrganisms = (nestedArray) => {
//   highestMatchPercentage = 0
//   currentPercentage = 0
//   frontCount = 0
//   newAequorArray = []

  // const there = (Array, value) => {
  //   if (Array.includes(value)) {
  //     console.log('----------value there---------')
  //     return true
  //   } else {
  //     console.log('----------value NOT there---------')
  //     return false
  //   }
  // }

  //   const deleteIfThere = (array, value) => {
  //     console.log('-----------------delete--------------')
  //     array.splice(array.indexOf(value), 1)
  //   }

  //   for (let i = 0; i < nestedArray.length; i++) {

  //     for (let j = 0; j < nestedArray.length; j++) {
  //       if (j !== i) {
  //         comparePercentage = nestedArray[i].compareDNA(nestedArray[j])

  //         if (comparePercentage > highestMatchPercentage) {
  //           if (false === there(newAequorArray, nestedArray[i])) {
  //             newAequorArray.unshift(nestedArray[i])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[i])
  //             newAequorArray.unshift(nestedArray[i])
  //           }
  //           if (false === there(newAequorArray, nestedArray[j])) {
  //             newAequorArray.unshift(nestedArray[j])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[j])
  //             newAequorArray.unshift(nestedArray[j])
  //           }
  //           frontCount += 2
  //           highestMatchPercentage = comparePercentage
  //           console.log('-------------unshift new------------', newAequorArray)
  //         }

  //         if (comparePercentage >= currentPercentage && comparePercentage < highestMatchPercentage) {
  //           if (false === there(newAequorArray, nestedArray[i])) {
  //             newAequorArray.splice(frontCount, 0, nestedArray[i])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[i])
  //             newAequorArray.splice(frontCount, 0, nestedArray[i])
  //           }
  //           if (false === there(newAequorArray, nestedArray[j])) {
  //             deleteIfThere(newAequorArray, nestedArray[j])
  //             newAequorArray.splice(frontCount, 0, nestedArray[j])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[j])
  //             newAequorArray.splice(frontCount, 0, nestedArray[j])
  //           }
  //           console.log('-------------splice new------------', newAequorArray)
  //         }

  //         if (comparePercentage < currentPercentage && comparePercentage < highestMatchPercentage) {
  //           if (false === there(newAequorArray, nestedArray[i])) {
  //             newAequorArray.push(nestedArray[i])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[i])
  //             newAequorArray.push(nestedArray[i])
  //           }
  //           if (false === there(newAequorArray, nestedArray[j])) {
  //             newAequorArray.push(nestedArray[j])
  //           } else {
  //             deleteIfThere(newAequorArray, nestedArray[j])
  //             newAequorArray.push(nestedArray[j])
  //           }
  //           console.log('-------------push new------------', newAequorArray)
  //         }
  //         console.log('higest: ', highestMatchPercentage, 'currentPercentage: ', currentPercentage, 'compare: ', comparePercentage)
  //         console.log(i, ':', j)
  //         currentPercentage = comparePercentage

  //       }

  //     }
  //   }
  //   console.log('-------------finalnew------------', newAequorArray)
  //   return newAequorArray
  // }