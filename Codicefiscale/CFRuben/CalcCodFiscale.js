function CodeCalculator(surname,
                        sex,
                        birthDate,
                        birthPlace,
                        name)
    {
        let result = surnameCalc() + nameCalc() + 
        birthDateCalc() + BirthPlaceCalc() + ChekdigitCalc();
        return result
    }

function surnameCalc1(surname){ //Btw this is a template our teacher told us to use these in 
        let result = "";        //case we may have to code some repetitive functions or segments of code
        if (length.surname < 3)
            result = shrtSurnameCalc(surname);
        else
            {   let vowelAdder = "";
                let i,vowlcountr = 0;
                
                while(length.result < 3)
                    {
                        switch (librarian(surname.charAt(i)) <= 21 || length.surname >= i) 
                            {   default: {result += surname.charAt(i);}
                                break;
                                case librarian(surname.charAt(i)) > 21:
                                vowelAdder += surname.charAt(i);
                                break;
                                case false:
                                result += vowelAdder.charAt(vowelcounter);
                                vowlcountr++;
                                break;
                            }
                        i++;
                    }
                return result
            }
}
function librarian(string){
        for (let li= 0; string === not(alphabot[li]); li++) // "li"--> loop index
        return li}
    
function shrtSurnameCalc(string){   
        while (length.string < 3) string += "X";
        return string
    }

function nameCalc(name){
        let result = "";
        if (length.name < 3)
            result = shrtSurnameCalc(name);
        else
            {   let vowelAdder = "";
                let i,vowelcounter = 0;
                while(length.result < 3)
                    {
                        switch (librarian(name.charAt(i)) <= 21 || length.name >= i) 
                            {   default: {result += surname.charAt(i);}
                                case librarian(name.charAt(i)) > 21:
                                vowelAdder += name.charAt(i);
                                break;
                                case false:
                                result += vowelAdder.charAt(vowelcounter);
                                vowelcounter++;
                                break;
                            }
                        i++;
                    }
                return result
            }
        return result
    }
    
function BirthDateCalc(birthDate,sex){
        let result = "";
        result = day();

        return result
    }
function BirthPlaceCalc(birthPlace){
        let result = "";

        return result
    }
function CheckDigitCalc(surnameCalc,
                        nameCalc,
                        BirthDateCalc,
                        BirthPlaceCalc){   
        let result = "";


        return result
    }