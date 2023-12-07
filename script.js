
const getInputData = (inputData)=>{

    const inputValues = document.getElementById(inputData)
    const values = []
    // console.log("input Data = " , inputValues)
    // console.log("input Data = " , inputValues.rows.length)
   

    for (let i = 0; i < inputValues.rows.length; i++) {
        const input = inputValues.rows[i].cells[0].querySelector('input');
    
        values[i] = parseFloat(input.value)
      
    }
    
    console.log( "input values = ",values)

    return values
    }



const calculate = ()=>{

   const inputData =  getInputData('inputData')
//    console.log("input Data =",  inputData)

        const resultData = inputData.map((values)=>{
                console.log( "values",values)
        })
}


