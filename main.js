// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum) => {
  return {
    specimenNum: specimenNum,
    dna: mockUpStrand(),

    mutate() {
      let newDna = mockUpStrand();
      do {
        newDna = mockUpStrand()
      } while (dna[0]=== newDna[0]);
      return dna = newDna;
    },

    compareDNA(specimenNum2) {
      let commonDna = [];
      const  dna2 = pAequorFactory(specimenNum2).dna;
      const arrlength = (this.dna.length + dna2.length)/2;
      for (let i = 0; i < arrlength; i++ ) {
        let result = commonDna.length/arrlength*100
        if(this.dna[i]=== dna2[i]) {
          commonDna.push(this.dna[i]); 
        }    
      }
      let result =  (commonDna.length/arrlength);
      console.log(result);
      
    },

    willLikelySurvive() {
      let survivalArray = [];
      let dnaArr = this.dna
      dnaArr.forEach(element => {
        if(element === 'C' || element === 'G') {
          survivalArray.push(element);
        }
      });
      if (survivalArray.length/this.dna.length*100 >= 60) {
        return true;
      } else {
        return false;
      }     
    }
  }
}
