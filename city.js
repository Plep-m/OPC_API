class City{
    constructor(Nom, CodeInsee, CodeDepartment, CodeRegion, CodePostaux0, Population,CodePostaux1,CodePostaux2,CodePostaux3,CodePostaux4,CodePostaux5,CodePostaux6,CodePostaux7,
        CodePostaux8,CodePostaux9,CodePostaux10,CodePostaux11,CodePostaux12,CodePostaux13,CodePostaux14,
        CodePostaux15,CodePostaux16,CodePostaux17,CodePostaux18,CodePostaux19,CodePostaux20){
        
        
        
        this.Nom = Nom;
        this.CodeInsee = CodeInsee;
        this.CodeDepartment = CodeDepartment;
        this.CodeRegion = CodeRegion;
        this.CodePostaux = [CodePostaux0,CodePostaux1,CodePostaux2,CodePostaux3,CodePostaux4,CodePostaux5,CodePostaux6,CodePostaux7,CodePostaux8,CodePostaux9,CodePostaux10,CodePostaux11,CodePostaux12,CodePostaux13,CodePostaux14,
        CodePostaux15,CodePostaux16,CodePostaux17,CodePostaux18,CodePostaux19,CodePostaux20];
        this.Population = Population;    


    }
}

module.exports = City;